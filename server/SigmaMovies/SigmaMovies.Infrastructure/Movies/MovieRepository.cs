using Mapster;
using Microsoft.EntityFrameworkCore;
using SigmaMovies.Application.Actors.Repositories;
using SigmaMovies.Application.Movies.Repositories;
using SigmaMovies.Application.Pagination;
using SigmaMovies.Domain.Actors;
using SigmaMovies.Domain.Movies;
using SigmaMovies.Persistence.Context;

namespace SigmaMovies.Infrastructure.Movies
{
    public class MovieRepository : BaseRepository<Movie>, IMovieRepository
    {
        private IActorRepository _actorRepo;
        public MovieRepository(SigmaMoviesContext context, IActorRepository actorRepo) : base(context)
        {
            _actorRepo = actorRepo;
        }

        public async Task<PagedList<Movie>> GetAllMovies(CancellationToken cancellationToken, PaginationFilter paginationFilter)
        {
            return await PagedList<Movie>.ToPagedListAsync(  _dbSet.Include(x => x.Actors).OrderByDescending(x=>x.Id),paginationFilter.PageNumber,paginationFilter.PageSize);
        }

        public async Task<Movie> GetMovieById(int id, CancellationToken cancellationToken)
        {
            return await _dbSet.Where(x => x.Id == id).Include(x => x.Actors).SingleOrDefaultAsync(cancellationToken);
        }

        public async Task<int> Create(Movie movie, CancellationToken cancellationToken)
        {
            movie.CreatedAt = DateTime.Now;
            movie.ModifiedAt = DateTime.Now;
            movie.IsDeleted = false;


            await AddAsync(cancellationToken, movie);

            return movie.Id;
        }

        public async Task Update(Movie movie, CancellationToken cancellationToken)
        {
            var movieToUpdate = await GetMovieById(movie.Id, cancellationToken);
            _context.Entry(movieToUpdate).CurrentValues.SetValues(movie);
            var _actors = movieToUpdate.Actors;
            foreach (var actor in movie.Actors)
            {
                if (_actors.All(act => act.Id != actor.Id))
                {
                    movieToUpdate.Actors.Add(actor.Adapt<Actor>());
                }
                else
                {
                    var act = movieToUpdate.Actors.SingleOrDefault(x => x.Id == actor.Id);
                    _context.Entry(act).CurrentValues.SetValues(actor);
                }
            }
            for (int i = 0; i < _actors.Count; i++)
            {
                if (movie.Actors.FirstOrDefault(act => act.Id == _actors[i].Id) == null)
                {
                    movieToUpdate.Actors.Remove(_actors[i]);
                }
            }
        }


        public async Task Delete(int id, CancellationToken cancellationToken)
        {
            var movieToDelete = await GetMovieById(id, cancellationToken);
            movieToDelete.IsDeleted = true;
            await UpdateAsync(cancellationToken, movieToDelete);
        }

        public async Task<Movie> AddActorsToMovie(Movie movie, List<string> actorNames, CancellationToken cancellationToken)
        {
            var allActors = await _actorRepo.GetAllActors(cancellationToken);
            var actorsForMovie = allActors.Where(x => actorNames.Contains(x.Name)).ToList();
            movie.Actors = actorsForMovie;
            return movie;
        }

        public void Detach(Actor actor)
        {
            _context.Entry(actor).State = EntityState.Detached;
        }

        public async Task<bool> Exists(int id, CancellationToken cancellationToken)
        {
            return await AnyAsync(cancellationToken, x => x.Id == id);
        }
    }
}

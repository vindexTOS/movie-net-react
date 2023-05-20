using Mapster;
using Microsoft.EntityFrameworkCore;
using SigmaMovies.Application.Actors.Repositories;
using SigmaMovies.Domain.Actors;
using SigmaMovies.Domain.Movies;
using System.Security.Cryptography.X509Certificates;
using System.Threading;

namespace SigmaMovies.Infrastructure.Actors
{
    public class ActorRepository : BaseRepository<Actor>,IActorRepository
    {
        public ActorRepository(DbContext context) : base(context)
        {
        }

        public async Task<List<Actor>> GetAllActors(CancellationToken cancellationToken)
        {
            return await _dbSet.ToListAsync(cancellationToken);
        }

        public async Task<Actor> GetActorById(int id, CancellationToken cancellationToken)
        {
            return await _dbSet.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        }
        public async Task<Actor> GetActorByIdFull(int id, CancellationToken cancellationToken)
        {
            return await _dbSet.Include(x=>x.Movies).SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        }
        
        public async Task<List<Actor>> GetActorsByMovieId(int id, CancellationToken cancellationToken)
        {
            return await _dbSet.Where(x => x.Id == id ).ToListAsync(cancellationToken);
        }

        public async Task<int> Create(Actor actor, CancellationToken cancellationToken)
        {

            await AddAsync(cancellationToken, actor);

            return actor.Id;
        }

        public async Task Update(Actor actor, CancellationToken cancellationToken)
        {
            
            _context.Entry(actor).CurrentValues.SetValues(actor);
        }
        public async Task UpdateWithNested(Actor actor, CancellationToken cancellationToken)
        {
            var actorToUpdate = await GetActorByIdFull(actor.Id, cancellationToken);
            _context.Entry(actorToUpdate).CurrentValues.SetValues(actor);
            var _movies = actorToUpdate.Movies;
            foreach (var movie in actor.Movies)
            {
                if (_movies.All(mov => mov.Id != movie.Id))
                {
                    var movieToAdd = movie.Adapt<Movie>();
                    movieToAdd.CreatedAt = actorToUpdate.Movies.SingleOrDefault(x=>x.Id == movie.Id).CreatedAt;
                    movieToAdd.ModifiedAt = DateTime.Now;
                    actorToUpdate.Movies.Add(movieToAdd);
                }
                else
                {
                    var mov = actorToUpdate.Movies.SingleOrDefault(x => x.Id == movie.Id);
                    movie.CreatedAt = mov.CreatedAt;
                    movie.ModifiedAt = mov.ModifiedAt;
                    _context.Entry(mov).CurrentValues.SetValues(movie);
                }
            }
            for (int i = 0; i < _movies.Count; i++)
            {
                if (actor.Movies.FirstOrDefault(mov => mov.Id == _movies[i].Id) == null)
                {
                    actorToUpdate.Movies.Remove(_movies[i]);
                }
            }
        }

        //public async Task Delete(int id,CancellationToken cancellationToken)
        //{
        //    var actorToDelete = await GetActorById(id, cancellationToken);
        //    actorToDelete.IsDeleted = true;
        //    await UpdateAsync(cancellationToken, actorToDelete);
        //}
        public async Task<bool> Exists(int id, CancellationToken cancellationToken)
        {
            return await AnyAsync(cancellationToken, x => x.Id == id);
        }

    }
}

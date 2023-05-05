using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using SigmaMovies.Application.Movies.Repositories;
using SigmaMovies.Domain.Movies;
using SigmaMovies.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace SigmaMovies.Infrastructure.Movies
{
    public class MovieRepository : BaseRepository<Movie> ,IMovieRepository
    {
        private SigmaMoviesContext moviesContext;
        public MovieRepository(SigmaMoviesContext context): base(context)
        {

        }

        public async Task<List<Movie>> GetAllMovies(CancellationToken cancellationToken)
        {
            return await _dbSet.Where(x => x.IsDeleted == false).ToListAsync();
        }

        public async Task<Movie> GetMovieById(int id, CancellationToken cancellationToken)
        {
            return await _dbSet.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        }

        public async Task<int> Create(Movie movie,CancellationToken cancellationToken)
        {
            movie.CreatedAt = DateTime.Now;
            movie.ModifiedAt = DateTime.Now;
            movie.IsDeleted = false;

            await AddAsync(cancellationToken,movie);

            return movie.Id;
        }

        public async Task Update(Movie movie, CancellationToken cancellationToken)
        {
            movie.ModifiedAt = DateTime.Now;
            await UpdateAsync(cancellationToken, movie);
        }

        public async Task Delete(int id,CancellationToken cancellationToken)
        {
            var movieToDelete = await GetMovieById(id, cancellationToken);
            movieToDelete.IsDeleted = true;
           await UpdateAsync(cancellationToken,movieToDelete);
        }
       
    }
}

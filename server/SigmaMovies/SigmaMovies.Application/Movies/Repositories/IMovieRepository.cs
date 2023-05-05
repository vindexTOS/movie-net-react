using SigmaMovies.Domain.Movies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Movies.Repositories
{
    public interface IMovieRepository
    {
        Task<int> Create(Movie movie, CancellationToken cancellationToken);
        Task Delete(int id, CancellationToken cancellationToken);
        Task<List<Movie>> GetAllMovies(CancellationToken cancellationToken);
        Task<Movie> GetMovieById(int id, CancellationToken cancellationToken);
        Task Update(Movie movie, CancellationToken cancellationToken);
    }
}

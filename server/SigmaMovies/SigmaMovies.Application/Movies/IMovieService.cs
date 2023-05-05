using SigmaMovies.Application.Movies.Requests;
using SigmaMovies.Application.Movies.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Movies
{
    public interface IMovieService
    {
        Task<int> CreateMovie(MovieRequestModel movie, CancellationToken cancellationToken);
        Task<List<MovieResponseModel>> GetAllMovies(CancellationToken cancellationToken);
    }
}

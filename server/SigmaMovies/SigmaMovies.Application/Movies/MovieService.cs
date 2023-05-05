using Mapster;
using SigmaMovies.Application.Movies.Repositories;
using SigmaMovies.Application.Movies.Requests;
using SigmaMovies.Application.Movies.Responses;
using SigmaMovies.Domain.Movies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Movies
{
    public class MovieService : IMovieService
    {
        private readonly IMovieRepository _repository;
        private readonly IUnitOfWork _unitOfWork;

        public MovieService(IMovieRepository repository, IUnitOfWork unitOfWork)
        {
            _repository = repository;
            _unitOfWork = unitOfWork;
        }

        public async Task<List<MovieResponseModel>> GetAllMovies(CancellationToken cancellationToken)
        {
            var movies = await _repository.GetAllMovies(cancellationToken);
            return movies.Adapt<List<MovieResponseModel>>();
        }

        public async Task<int> CreateMovie(MovieRequestModel movie,CancellationToken cancellationToken)
        {
            var movieToCreate = movie.Adapt<Movie>();
            int id = await _unitOfWork.Movie.Create(movieToCreate,cancellationToken);
            _unitOfWork.Save();
            return id;
        }


    }
}

using Microsoft.AspNetCore.Mvc;
using SigmaMovies.Application.Actors;
using SigmaMovies.Application.Actors.Requests;
using SigmaMovies.Application.Actors.Responses;
using SigmaMovies.Application.Movies;
using SigmaMovies.Application.Movies.Requests;
using SigmaMovies.Application.Movies.Responses;

namespace SigmaMovies.API.Controllers
{
    public class MoviesController : Controller
    {
        private readonly IMovieService movieService;
        private readonly IActorService actorService;

        public MoviesController(IMovieService movieService, IActorService actorService)
        {
            this.movieService = movieService;
            this.actorService = actorService;
        }

        [Route("GetAllMovies")]
        [HttpGet]
        public async Task<List<MovieResponseModel>> GetAllMovies(CancellationToken cancellationToken)
        {
            return await movieService.GetAllMovies(cancellationToken);
        }

        [HttpPost("AddMovie")]
        public async Task AddMovie(CancellationToken cancellationToken, MovieRequestModel request)
        {
            await movieService.CreateMovie(request,cancellationToken);
        }

        [Route("GetAllActors")]
        [HttpGet]
        public async Task<List<ActorResponseModel>> GetAllActors(CancellationToken cancellationToken)
        {
            return await actorService.GetAllActors(cancellationToken);
        }

        [HttpPost("AddActor")]
        public async Task AddActor(CancellationToken cancellationToken, ActorRequestModel request)
        {
            await actorService.AddActor(  request, cancellationToken);
        }
    }
}

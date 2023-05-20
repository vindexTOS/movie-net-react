using Moq;
using SigmaMovies.Application.Actors.Requests;
using SigmaMovies.Application;
using SigmaMovies.Application.Movies.Repositories;
using SigmaMovies.Application.Movies;
using SigmaMovies.Application.Exceptions;
using SigmaMovies.Application.Movies.Requests;
using SigmaMovies.Domain.Movies;
using Microsoft.AspNetCore.JsonPatch;

namespace SigmaMoviesTest.Movies
{
    public class MovieTest
    {
        private readonly Mock<IMovieRepository> movieRepo = new Mock<IMovieRepository> { DefaultValue = DefaultValue.Empty };
        private readonly Mock<IUnitOfWork> unitOfWorkRepo = new Mock<IUnitOfWork> { DefaultValue = DefaultValue.Empty };

        private readonly MovieService movieService;
        private readonly CancellationToken cancellationToken = new CancellationToken();

        private MovieRequestPutModel movieRequestPutModel;

        private int id;

        public MovieTest()
        {
            movieService = new MovieService(movieRepo.Object, unitOfWorkRepo.Object);
            id = 1;
            movieRequestPutModel = GetMovieRequestPutModel();
        }

        [Fact]
        public void ShouldThrowMovieNotFound_WhenCallingGetByIdMethod()
        {
            //arrange
            movieRepo.Setup(x => x.GetMovieById(id, cancellationToken));

            //act
            var task = () => movieService.GetMovieById(cancellationToken, id);

            //assert

            Assert.ThrowsAnyAsync<MovieNotFoundException>(task);
        }

        [Fact]
        public void ShouldThrowMovieNotFound_WhenUpdatingMovie()
        {
            //arrange
            movieRepo.Setup(x => x.GetMovieById(id, cancellationToken));

            //act
            var task = () => movieService.UpdateMovieAsync(cancellationToken, movieRequestPutModel);

            //assert

            Assert.ThrowsAnyAsync<MovieNotFoundException>(task);
        }


        [Fact]
        public void ShouldThrowMovieNotFound_WhenUpdatingMovieWithPatch()
        {
            //arrange
            movieRepo.Setup(x => x.GetMovieById(id, cancellationToken));

            //act
            var task = () => movieService.UpdatePatchMovie(id,It.IsAny<JsonPatchDocument<Movie>>(), cancellationToken);

            //assert

            Assert.ThrowsAnyAsync<MovieNotFoundException>(task);
        }


        [Fact]
        public void ShouldThrowMovieNotFound_WhenDeletingMovie()
        {
            //arrange
            movieRepo.Setup(x => x.GetMovieById(id, cancellationToken));

            //act
            var task = () => movieService.DeleteMovie(id,  cancellationToken);

            //assert

            Assert.ThrowsAnyAsync<MovieNotFoundException>(task);
        }


        private MovieRequestPutModel GetMovieRequestPutModel()
        {
            MovieRequestPutModel movieRequestPutModel = new MovieRequestPutModel()
            {
                Id = 1,
                Title = "The Shawshank Redemption",
                Color = "Green",
                Color2 = "Yellow",
                Img = "https://www.example.com/images/shawshank_redemption.jpg",
                Video = "https://www.example.com/videos/shawshank_redemption.mp4",
                Description = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                Actors = new List<ActorDto>
            {
                new ActorDto { Id = 1, Name = "Tim Robbins", Img = "https://www.example.com/images/tim_robbins.jpg" },
                new ActorDto { Id = 2, Name = "Morgan Freeman", Img = "https://www.example.com/images/morgan_freeman.jpg" }
            },
                Rating = new Rating { IMDb = 9.3, RottenTomatoes = 90 }
            };
            return movieRequestPutModel;
        }
    }
}

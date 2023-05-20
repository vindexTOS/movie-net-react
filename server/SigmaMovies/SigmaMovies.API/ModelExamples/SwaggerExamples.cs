namespace SigmaMovies.API.ModelExamples
{
    using SigmaMovies.Application.Actors.Requests;
    using SigmaMovies.Application.Movies.Requests;
    using SigmaMovies.Application.Movies.Responses;
    using SigmaMovies.Domain.Movies;
    using Swashbuckle.AspNetCore.Filters;
    using System.Collections.Generic;

    public class MovieRequestModelExamples : IMultipleExamplesProvider<MovieRequestModel>
    {
        public IEnumerable<SwaggerExample<MovieRequestModel>> GetExamples()
        {
            yield return new SwaggerExample<MovieRequestModel>
            {
                Name = "Example 1",
                Value = new MovieRequestModel
                {
                    Id = 0,
                    Title = "The Matrix",
                    Color = "Green",
                    Color2 = "Black",
                    Img = "https://www.example.com/the-matrix.jpg",
                    Video = "https://www.example.com/the-matrix.mp4",
                    Description = "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
                    Rating = new Rating { IMDb = 8.7, RottenTomatoes = 87 },
                    Actors = new List<string> { "Keanu Reeves", "Carrie-Anne Moss", "Laurence Fishburne" },
                    Metadata = new Metadata { Hr = "2h 16m", Year = 1999, Genre = "Sci-Fi" }
                }
            };

            yield return new SwaggerExample<MovieRequestModel>
            {
                Name = "Example 2",
                Value = new MovieRequestModel
                {
                    Id = 0,
                    Title = "The Dark Knight",
                    Color = "Black",
                    Color2 = "White",
                    Img = "https://www.example.com/the-dark-knight.jpg",
                    Video = "https://www.example.com/the-dark-knight.mp4",
                    Description = "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                    Rating = new Rating { IMDb = 9.0, RottenTomatoes = 94 },
                    Actors = new List<string> { "Christian Bale", "Heath Ledger", "Aaron Eckhart" },
                    Metadata = new Metadata { Hr = "2h 32m", Year = 2008, Genre = "Action" }
                }
            };
        }
    }

    public class MovieRequestPutModelExample : IMultipleExamplesProvider<MovieRequestPutModel>
    {
        public IEnumerable<SwaggerExample<MovieRequestPutModel>> GetExamples()
        {
            yield return SwaggerExample.Create("Example 1", new MovieRequestPutModel
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
                Rating = new Rating { IMDb = 9.3, RottenTomatoes = 90 },
                Metadata = new Metadata { Hr = "2h 22m", Year = 1994, Genre = "Drama" }
            });

            yield return SwaggerExample.Create("Example 2", new MovieRequestPutModel
            {
                Id = 2,
                Title = "The Godfather",
                Color = "Black",
                Color2 = "White",
                Img = "https://www.example.com/images/godfather.jpg",
                Video = "https://www.example.com/videos/godfather.mp4",
                Description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                Actors = new List<ActorDto>
            {
                new ActorDto { Id = 3, Name = "Marlon Brando", Img = "https://www.example.com/images/marlon_brando.jpg" },
                new ActorDto { Id = 4, Name = "Al Pacino", Img = "https://www.example.com/images/al_pacino.jpg" }
            },
                Rating = new Rating { IMDb = 9.2, RottenTomatoes = 98 },
                Metadata = new Metadata { Hr = "2h 55m", Year = 1972, Genre = "Crime" }
            });
        }
    }

    public class ActorRequestModelExample : IMultipleExamplesProvider<ActorRequestModel>
    {
        public IEnumerable<SwaggerExample<ActorRequestModel>> GetExamples()
        {
            yield return SwaggerExample.Create("Example 1", new ActorRequestModel
            {
                Name = "John Smith",
                Img = "https://example.com/images/john-smith.jpg"
            });

            yield return SwaggerExample.Create("Example 2", new ActorRequestModel
            {
                Name = "Jane Doe",
                Img = "https://example.com/images/jane-doe.jpg"
            });
        }
    }

    public class ActorRequestPutModelNoNestedExamples : IMultipleExamplesProvider<ActorRequestPutModelNoNested>
    {
        public IEnumerable<SwaggerExample<ActorRequestPutModelNoNested>> GetExamples()
        {
            yield return new SwaggerExample<ActorRequestPutModelNoNested>
            {
                Name = "Example 1",
                Value = new ActorRequestPutModelNoNested
                {
                    Id = 1,
                    Name = "John Doe",
                    Img = "https://example.com/image.jpg"
                }
            };

            yield return new SwaggerExample<ActorRequestPutModelNoNested>
            {
                Name = "Example 2",
                Value = new ActorRequestPutModelNoNested
                {
                    Id = 2,
                    Name = "Jane Smith",
                    Img = "https://example.com/image.png"
                }
            };
        }
    }


    public class ActorRequestPutModelExamples : IMultipleExamplesProvider<ActorRequestPutModel>
    {
        public IEnumerable<SwaggerExample<ActorRequestPutModel>> GetExamples()
        {
            yield return new SwaggerExample<ActorRequestPutModel>
            {
                Name = "Example 1",
                Value = new ActorRequestPutModel
                {
                    Id = 1,
                    Name = "Tom Hanks",
                    Img = "https://example.com/tom-hanks.jpg",
                    Movies = new List<MovieDTO>
                {
                    new MovieDTO
                    {
                        Id = 1,
                        Title = "Forrest Gump",
                        Color = "#00FF00",
                        Color2 = "#FFFFFF",
                        Img = "https://example.com/forrest-gump.jpg",
                        Video = "https://example.com/forrest-gump.mp4",
                        Description = "Lorem ipsum dolor sit amet.",
                        Rating = new Rating
                        {
                            IMDb = 8.8,
                            RottenTomatoes = 71
                        }
                    },
                    new MovieDTO
                    {
                        Id = 2,
                        Title = "Cast Away",
                        Color = "#FF0000",
                        Color2 = "#FFFFFF",
                        Img = "https://example.com/cast-away.jpg",
                        Video = "https://example.com/cast-away.mp4",
                        Description = "Lorem ipsum dolor sit amet.",
                        Rating = new Rating
                        {
                            IMDb = 7.8,
                            RottenTomatoes = 90
                        }
                    }
                }
                }
            };

            yield return new SwaggerExample<ActorRequestPutModel>
            {
                Name = "Example 2",
                Value = new ActorRequestPutModel
                {
                    Id = 2,
                    Name = "Emma Stone",
                    Img = "https://example.com/emma-stone.jpg",
                    Movies = new List<MovieDTO>
                {
                    new MovieDTO
                    {
                        Id = 3,
                        Title = "La La Land",
                        Color = "#FFA500",
                        Color2 = "#FFFFFF",
                        Img = "https://example.com/la-la-land.jpg",
                        Video = "https://example.com/la-la-land.mp4",
                        Description = "Lorem ipsum dolor sit amet.",
                        Rating = new Rating
                        {
                            IMDb = 8.0,
                            RottenTomatoes = 91
                        }
                    }
                }
                }
            };
        }
    }

    public class MovieResponseModelExamples : IMultipleExamplesProvider<MovieResponseModel>
    {
        public IEnumerable<SwaggerExample<MovieResponseModel>> GetExamples()
        {
            yield return SwaggerExample.Create("Example 1", new MovieResponseModel
            {
                Id = 1,
                Title = "The Shawshank Redemption",
                Color = "Blue",
                Color2 = "White",
                Img = "https://www.example.com/shawshank_redemption.jpg",
                Video = "https://www.example.com/shawshank_redemption.mp4",
                Description = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                Actors = new List<ActorDto>
            {
                new ActorDto { Name = "Tim Robbins", Img = "https://www.example.com/tim_robbins.jpg" },
                new ActorDto { Name = "Morgan Freeman", Img = "https://www.example.com/morgan_freeman.jpg" }
            },
                Rating = new Rating { IMDb = 9.3, RottenTomatoes = 93 }
            });

            yield return SwaggerExample.Create("Example 2", new MovieResponseModel
            {
                Id = 2,
                Title = "The Godfather",
                Color = "Black",
                Color2 = "Gold",
                Img = "https://www.example.com/godfather.jpg",
                Video = "https://www.example.com/godfather.mp4",
                Description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                Actors = new List<ActorDto>
            {
                new ActorDto { Name = "Marlon Brando", Img = "https://www.example.com/marlon_brando.jpg" },
                new ActorDto { Name = "Al Pacino", Img = "https://www.example.com/al_pacino.jpg" }
            },
                Rating = new Rating { IMDb = 9.2, RottenTomatoes = 92 }
            });
        }
    }
}

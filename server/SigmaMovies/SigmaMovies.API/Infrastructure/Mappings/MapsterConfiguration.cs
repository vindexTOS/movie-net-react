using Mapster;
using SigmaMovies.Application.Movies.Requests;
using SigmaMovies.Application.Users.Requests;
using SigmaMovies.Application.Users.Responses;
using SigmaMovies.Domain.Actors;
using SigmaMovies.Domain.Movies;
using SigmaMovies.Domain.Users;

namespace SigmaMovies.API.Infrastructure.Mappings
{
    public static class MapsterConfiguration
    {
        public static void RegisterMaps(this IServiceCollection services)
        {
            TypeAdapterConfig<UserRequestModel, User>
            .NewConfig().Map(dest => dest.PasswordHash, src => src.Password);

            TypeAdapterConfig<MovieRequestPutModel, Movie>
               .NewConfig()
               .PreserveReference(true)
               .Ignore(dst => dst.Actors);
        }
    }
}

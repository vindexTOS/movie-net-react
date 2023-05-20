using Microsoft.AspNetCore.JsonPatch;
using SigmaMovies.Application.Actors.Requests;
using SigmaMovies.Application.Actors.Responses;
using SigmaMovies.Domain.Actors;
using SigmaMovies.Domain.Movies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Actors
{
    public interface IActorService
    {
        Task<int> AddActor(ActorRequestModel actor, CancellationToken cancellationToken);
        Task<ActorResponseModel> GetActorById(int id, CancellationToken cancellationToken);
        Task<ActorResponseModel> GetActorByIdFull(int id, CancellationToken cancellationToken);
        Task<List<ActorResponseModel>> GetAllActors(CancellationToken cancellationToken);
        Task UpdateActorAsync(CancellationToken cancellationToken, ActorRequestPutModelNoNested actor);
        Task UpdateActorWithNestedAsync(CancellationToken cancellationToken, ActorRequestPutModel actor);
        Task UpdatePatchActor(int id, JsonPatchDocument<Actor> actor, CancellationToken cancellationToken);
    }
}

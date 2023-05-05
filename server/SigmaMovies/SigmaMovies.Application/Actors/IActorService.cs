using SigmaMovies.Application.Actors.Requests;
using SigmaMovies.Application.Actors.Responses;
using SigmaMovies.Domain.Actors;
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
        Task<List<ActorResponseModel>> GetAllActors(CancellationToken cancellationToken);
    }
}

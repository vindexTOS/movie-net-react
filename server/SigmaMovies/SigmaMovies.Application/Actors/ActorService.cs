using Mapster;
using SigmaMovies.Application.Actors.Repositories;
using SigmaMovies.Application.Actors.Requests;
using SigmaMovies.Application.Actors.Responses;
using SigmaMovies.Application.Movies.Repositories;
using SigmaMovies.Application.Movies.Requests;
using SigmaMovies.Application.Movies.Responses;
using SigmaMovies.Domain.Actors;
using SigmaMovies.Domain.Movies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Actors
{
    public class ActorService : IActorService
    {

        private readonly IActorRepository _repository;
        private readonly IUnitOfWork _unitOfWork;

        public ActorService(IActorRepository repository, IUnitOfWork unitOfWork)
        {
            _repository = repository;
            _unitOfWork = unitOfWork;
        }

        public async Task<List<ActorResponseModel>> GetAllActors(CancellationToken cancellationToken)
        {
            var actors = await _repository.GetAllActors(cancellationToken);
            return actors.Adapt<List<ActorResponseModel>>();
        }

        public async Task<int> AddActor(ActorRequestModel actor, CancellationToken cancellationToken)
        {
            var actorToAdd = actor.Adapt<Actor>();
            int id = await _unitOfWork.Actor.Create(actorToAdd, cancellationToken);
            _unitOfWork.Save();
            return id;
        }

    }
}

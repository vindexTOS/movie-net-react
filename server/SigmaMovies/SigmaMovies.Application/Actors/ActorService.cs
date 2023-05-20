using Mapster;
using Microsoft.AspNetCore.JsonPatch;
using SigmaMovies.Application.Actors.Repositories;
using SigmaMovies.Application.Actors.Requests;
using SigmaMovies.Application.Actors.Responses;
using SigmaMovies.Application.Exceptions;
using SigmaMovies.Domain.Actors;

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
        public async Task<ActorResponseModel> GetActorById(int id, CancellationToken cancellationToken)
        {
            return (await _repository.GetActorById(id, cancellationToken)).Adapt<ActorResponseModel>() ?? throw new ActorNotFoundException("Actor not found");
        }

        public async Task<ActorResponseModel> GetActorByIdFull(int id, CancellationToken cancellationToken)
        {
            return (await _repository.GetActorByIdFull(id, cancellationToken)).Adapt<ActorResponseModel>();
        }


        public async Task<int> AddActor(ActorRequestModel actor, CancellationToken cancellationToken)
        {
            var actorToAdd = actor.Adapt<Actor>();
            int id = await _unitOfWork.Actor.Create(actorToAdd, cancellationToken);
            await _unitOfWork.Save(cancellationToken);
            return id;
        }

        public async Task UpdateActorAsync(CancellationToken cancellationToken, ActorRequestPutModelNoNested actor)
        {
            var actorToUpdate = await _unitOfWork.Actor.GetActorById(actor.Id, cancellationToken) ?? throw new ActorNotFoundException("Actor not found");
            actor.Adapt(actorToUpdate);
            await _unitOfWork.Save(cancellationToken);
        }

        public async Task UpdateActorWithNestedAsync(CancellationToken cancellationToken, ActorRequestPutModel actor)
        {
            var actorToUpdate = await _repository.GetActorByIdFull(actor.Id, cancellationToken) ?? throw new ActorNotFoundException("Actor not found");

            actorToUpdate = actor.Adapt<Actor>();
            await _unitOfWork.Actor.UpdateWithNested(actorToUpdate, cancellationToken);
            await _unitOfWork.Save(cancellationToken);
        }

        public async Task UpdatePatchActor(int id, JsonPatchDocument<Actor> actor, CancellationToken cancellationToken)
        {
            var actorToUpdate = await _unitOfWork.Actor.GetActorById(id, cancellationToken) ?? throw new ActorNotFoundException("Actor not found");
            actor.ApplyTo(actorToUpdate);
            await _unitOfWork.Save(cancellationToken);

        }

        //public async Task DeleteActor(int id,CancellationToken cancellationToken)
        //{
        //    await _unitOfWork.Actor.Delete(id, cancellationToken);
        //    _unitOfWork.Save();
        //}
    }
}

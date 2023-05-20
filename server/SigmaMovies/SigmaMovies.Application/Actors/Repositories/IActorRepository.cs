using SigmaMovies.Domain.Actors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Actors.Repositories
{
    public interface IActorRepository
    {
        Task<int> Create(Actor actor, CancellationToken cancellationToken);
        Task<bool> Exists(int id, CancellationToken cancellationToken);
        Task<Actor> GetActorById(int id, CancellationToken cancellationToken);
        Task<Actor> GetActorByIdFull(int id, CancellationToken cancellationToken);
        Task<List<Actor>> GetActorsByMovieId(int id, CancellationToken cancellationToken);
        Task<List<Actor>> GetAllActors(CancellationToken cancellationToken);
        Task Update(Actor actor, CancellationToken cancellationToken);
        Task UpdateWithNested(Actor actor, CancellationToken cancellationToken);
    }
}

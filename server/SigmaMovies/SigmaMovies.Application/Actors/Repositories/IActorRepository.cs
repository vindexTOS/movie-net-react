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
        Task<Actor> GetActorById(int id, CancellationToken cancellationToken);
        Task<List<Actor>> GetAllActors(CancellationToken cancellationToken);
        Task Update(Actor actor, CancellationToken cancellationToken);
    }
}

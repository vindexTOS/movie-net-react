using Microsoft.EntityFrameworkCore;
using SigmaMovies.Application.Actors.Repositories;
using SigmaMovies.Domain.Actors;
using SigmaMovies.Domain.Movies;

namespace SigmaMovies.Infrastructure.Actors
{
    public class ActorRepository : BaseRepository<Actor>,IActorRepository
    {
        public ActorRepository(DbContext context) : base(context)
        {
        }

        public async Task<List<Actor>> GetAllActors(CancellationToken cancellationToken)
        {
            return await _dbSet.ToListAsync(cancellationToken);
        }

        public async Task<Actor> GetActorById(int id, CancellationToken cancellationToken)
        {
            return await _dbSet.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        }

        public async Task<int> Create(Actor actor, CancellationToken cancellationToken)
        {

            await AddAsync(cancellationToken, actor);

            return actor.Id;
        }

        public async Task Update(Actor actor, CancellationToken cancellationToken)
        {
            await UpdateAsync(cancellationToken, actor);
        }

        

    }
}

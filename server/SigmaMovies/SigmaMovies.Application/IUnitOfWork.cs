using SigmaMovies.Application.Actors.Repositories;
using SigmaMovies.Application.Movies.Repositories;
using SigmaMovies.Application.Users.Repositories;

namespace SigmaMovies.Application
{
    public interface IUnitOfWork /*: IDisposable*/
    {
        Task Save(CancellationToken cancellationToken);
        //void Rollback();
        IUserRepository User { get; }
        IMovieRepository Movie { get; }
        IActorRepository Actor { get; }
    
    }
}

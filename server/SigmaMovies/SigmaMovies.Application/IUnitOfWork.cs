using SigmaMovies.Application.Actors.Repositories;
using SigmaMovies.Application.Movies.Repositories;

namespace SigmaMovies.Application
{
    public interface IUnitOfWork : IDisposable
    {
        void Save();
        //void Rollback();
        IMovieRepository Movie { get; }
        IActorRepository Actor { get; }
    
    }
}

using Microsoft.EntityFrameworkCore;
using SigmaMovies.Application;
using SigmaMovies.Application.Actors.Repositories;
using SigmaMovies.Application.Movies.Repositories;
using SigmaMovies.Domain.Movies;
using SigmaMovies.Infrastructure.Actors;
using SigmaMovies.Infrastructure.Movies;
using SigmaMovies.Persistence.Context;

namespace SigmaMovies.Infrastructure.UOW
{

    public class UnitOfWork : IUnitOfWork,IDisposable
    {
        private SigmaMoviesContext context;
        private MovieRepository movieRepository;
        private ActorRepository actorRepository;
        public UnitOfWork(DbContextOptions<SigmaMoviesContext> options)
        {
            context = new SigmaMoviesContext(options);
        }
       

        public IMovieRepository Movie
        {
            get
            {

                if (this.movieRepository == null)
                {
                    this.movieRepository = new MovieRepository(context);
                }
                return movieRepository;
            }
        }

        public IActorRepository Actor
        {
            get
            {

                if (this.actorRepository == null)
                {
                    this.actorRepository = new ActorRepository(context);
                }
                return actorRepository;
            }
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public void Rollback()
        {
            foreach (var entry in context.ChangeTracker.Entries())
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.State = EntityState.Detached;
                        break;
                }
            }
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

    }
}

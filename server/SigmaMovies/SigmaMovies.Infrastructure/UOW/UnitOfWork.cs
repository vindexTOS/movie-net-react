using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using SigmaMovies.Application;
using SigmaMovies.Application.Actors.Repositories;
using SigmaMovies.Application.Movies.Repositories;
using SigmaMovies.Application.Users.Repositories;
using SigmaMovies.Domain.Movies;
using SigmaMovies.Infrastructure.Actors;
using SigmaMovies.Infrastructure.Movies;
using SigmaMovies.Infrastructure.Users;
using SigmaMovies.Persistence.Context;

namespace SigmaMovies.Infrastructure.UOW
{

    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private SigmaMoviesContext context;
        private UserRepository userRepository;
        private MovieRepository movieRepository;
        private ActorRepository actorRepository;
        public UnitOfWork(DbContextOptions<SigmaMoviesContext> options)
        {
            context = new SigmaMoviesContext(options);
        }


        public IUserRepository User
        {
            get
            {

                if (this.userRepository == null)
                {
                    this.userRepository = new UserRepository(context);
                }
                return userRepository;
            }
        }



        public IMovieRepository Movie
        {
            get
            {

                if (this.movieRepository == null)
                {
                    actorRepository = new ActorRepository(context);
                    this.movieRepository = new MovieRepository(context, actorRepository);
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

        public async Task Save(CancellationToken cancellationToken)
        {
            await context.SaveChangesAsync(cancellationToken);
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

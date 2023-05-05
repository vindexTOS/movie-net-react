using Microsoft.EntityFrameworkCore;
using SigmaMovies.Domain.Actors;
using SigmaMovies.Domain.Movies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Persistence.Context
{
    public class SigmaMoviesContext : DbContext
    {
        public SigmaMoviesContext(DbContextOptions<SigmaMoviesContext> options) : base(options)
        {

        }


        //DbSets
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Actor> Actors { get; set; }


        // Configurations

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(SigmaMoviesContext).Assembly);
        }

    }
}

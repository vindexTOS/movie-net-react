using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SigmaMovies.Domain.Actors;
using SigmaMovies.Domain.Movies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Persistence.Configurations
{
    internal class ActorConfiguration : IEntityTypeConfiguration<Actor>
    {
        public void Configure(EntityTypeBuilder<Actor> builder)
        {
            builder.ToTable("Actors");
            builder.HasKey(actor => actor.Id);
            builder.Property(actor => actor.Name).IsRequired().HasMaxLength(100);
            builder.Property(actor => actor.Img).IsRequired().HasMaxLength(500);

        }


    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SigmaMovies.Domain.Movies;
using System.Security.Cryptography.X509Certificates;

namespace SigmaMovies.Persistence.Configurations
{
    internal class MovieConfiguration : IEntityTypeConfiguration<Movie>
    {
        public void Configure(EntityTypeBuilder<Movie> builder)
        {
            builder.ToTable("Movies");
            builder.HasKey(movie => movie.Id);
            builder.HasMany(movie => movie.Actors).WithMany(actors => actors.Movies);
            builder.OwnsOne(movie => movie.Rating);
            builder.Property(movie => movie.Title).IsRequired().HasMaxLength(100);
            builder.Property(movie => movie.Color).IsRequired().HasMaxLength(7);
            builder.Property(movie => movie.Color2).IsRequired().HasMaxLength(7);
            builder.Property(movie => movie.Img).IsRequired().HasMaxLength(500);
            builder.Property(movie => movie.Video).IsRequired().HasMaxLength(500);
            builder.Property(movie => movie.Description).IsRequired().HasMaxLength(1000);
            builder.Property(movie => movie.CreatedAt).IsRequired().HasColumnType("datetime");
            builder.Property(movie => movie.ModifiedAt).IsRequired().HasColumnType("datetime");
            builder.Property(movie => movie.IsDeleted).IsRequired();
        }
    }
}

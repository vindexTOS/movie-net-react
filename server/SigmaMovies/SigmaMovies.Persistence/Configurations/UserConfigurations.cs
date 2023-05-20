using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using SigmaMovies.Domain.Users;

namespace SigmaMovies.Persistence.Configurations
{
    public class UserConfigurations : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");
            builder.HasKey(user => user.Id);
            builder.Property(user => user.UserName).IsRequired().HasMaxLength(100);
            builder.Property(user => user.PasswordHash).IsRequired().HasMaxLength(512);
            builder.Property(user => user.UserRole).IsRequired().HasMaxLength(20);
            builder.Property(user => user.CreatedAt).IsRequired().HasColumnType("datetime");
            builder.Property(user => user.ModifiedAt).IsRequired().HasColumnType("datetime");
            builder.Property(user => user.IsDeleted).IsRequired();

        }


    }
}

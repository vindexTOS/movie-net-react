using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SigmaMovies.Domain.Users;
using SigmaMovies.Persistence.Context;
using System.Security.Cryptography;
using System.Text;

namespace SigmaMovies.Persistence.Seed
{
    public static class SigmaMoviesSeed
    {
        private static string SECRET_KEY = "yek_TERCES";
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using var scope = serviceProvider.CreateScope();
            var database = scope.ServiceProvider.GetRequiredService<SigmaMoviesContext>();

            Migrate(database);
            SeedEverything(database);
        }

     
        private static void Migrate(SigmaMoviesContext context)
        {
            context.Database.Migrate();
        }

        private static void SeedEverything(SigmaMoviesContext context)
        {
            var seeded = false;

            SeedUsers(context, ref seeded);

            if (seeded)
                context.SaveChanges();
        }

        private static void SeedUsers(SigmaMoviesContext context, ref bool seeded)
        {
            var Username = "Admin@gmail.com";
            var password = GenerateHash("Akaki!1");
            var users = new List<User>()
            {
                new User
                {
                    UserRole = "Admin",
                    PasswordHash = password,
                    CreatedAt = DateTime.Now,
                    ModifiedAt= DateTime.Now,
                    UserName = Username,
                    IsDeleted=false
                    //Email = Username,
                },

            };
          


            foreach (var user in users)
            {
                if (context.Users.Any(x => x.UserName == user.UserName)) continue;

                context.Users.Add(user);

                seeded = true;
            }
          







        }
        static string GenerateHash(string input)
        {
            using (SHA512 sha = SHA512.Create())
            {
                byte[] bytes = Encoding.ASCII.GetBytes(input + SECRET_KEY);
                byte[] hashBytes = sha.ComputeHash(bytes);

                StringBuilder sb = new StringBuilder();

                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("X2"));
                }

                return sb.ToString();
            }
        }
    }
}

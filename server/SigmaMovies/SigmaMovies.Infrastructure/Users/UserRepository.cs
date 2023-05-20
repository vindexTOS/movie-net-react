using Microsoft.EntityFrameworkCore;
using SigmaMovies.Application.Users.Repositories;
using SigmaMovies.Domain.Users;
using SigmaMovies.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Infrastructure.Users
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {



        public UserRepository(SigmaMoviesContext context) : base(context)
        {

        }


        public async Task<int> CreateAsync(CancellationToken cancellationToken, User user)
        {
            user.CreatedAt = DateTime.Now;
            user.ModifiedAt = DateTime.Now;
            await AddAsync(cancellationToken, user);
            return user.Id;
        }

        public async Task<bool> Exists(CancellationToken cancellationToken, int id)
        {
            return await base.AnyAsync(cancellationToken, x => x.Id == id);
        }


        public async Task<bool> ExistsByUsername(CancellationToken cancellationToken, string username)
        {
            return await base.AnyAsync(cancellationToken, x => x.UserName == username);
        }
        public async Task<User> GetByUsernameAndPassword(CancellationToken cancellationToken, string username, string password)
        {
            return await _context.Set<User>().SingleOrDefaultAsync(x => x.UserName == username && password == x.PasswordHash, cancellationToken);
        }

        public async Task<int> GetUserIdByUsername(CancellationToken cancellationToken, string name)
        {
            var user = await _context.Set<User>().SingleOrDefaultAsync(x => x.UserName == name, cancellationToken);
            return user.Id;
        }
        public async Task<User> GetUserByUsername(CancellationToken cancellationToken, string name)
        {
            var user = await _context.Set<User>().SingleOrDefaultAsync(x => x.UserName == name, cancellationToken);
            return user;
        }
    }
}

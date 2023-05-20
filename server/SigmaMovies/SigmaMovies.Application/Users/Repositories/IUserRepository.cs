using SigmaMovies.Domain.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Users.Repositories
{
    public interface IUserRepository
    {
        Task<int> CreateAsync(CancellationToken cancellationToken, User user);
        Task<bool> Exists(CancellationToken cancellationToken, int id);
        Task<bool> ExistsByUsername(CancellationToken cancellationToken, string username);
        Task<User> GetByUsernameAndPassword(CancellationToken cancellationToken, string username, string password);
        Task<User> GetUserByUsername(CancellationToken cancellationToken, string name);
        Task<int> GetUserIdByUsername(CancellationToken cancellationToken, string name);
    }
}

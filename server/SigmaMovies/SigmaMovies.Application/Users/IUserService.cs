using SigmaMovies.Application.Users.Requests;
using SigmaMovies.Application.Users.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Users
{
    public interface IUserService
    {
        Task<string> AuthenticateAsync(CancellationToken cancellationToken, string username, string password);
        Task<UserResponseModel> CreateAsync(CancellationToken cancellationToken, UserRequestModel userModel);
        Task<UserResponseModel> GetUserByUsername(CancellationToken cancellationToken, string name);
    }
}

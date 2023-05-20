using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using SigmaMovies.API.Infrastructure.Auth.JWT;
using SigmaMovies.Application.Users;
using SigmaMovies.Application.Users.Requests;

namespace SigmaMovies.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorizationController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IOptions<JWTConfiguration> _options;

        public AuthorizationController(IUserService userService, IOptions<JWTConfiguration> options)
        {
            _userService = userService;
            _options = options;
        }


        [Route("Register")]
        [HttpPost]
        public async Task Register(CancellationToken cancellation, UserRequestModel user)
        {
            _ = await _userService.CreateAsync(cancellation, user);
        }


        [Route("LogIn")]
        [HttpPost]
        public async Task<string> LogIn(CancellationToken cancellation, UserRequestModel request)
        {
            var user = await _userService.GetUserByUsername(cancellation, request.Username);
            var username = await _userService.AuthenticateAsync(cancellation, request.Username, request.Password);
            var role = user.UserRole;


            return JWTHelper.GenerateSecurityToken(username, user.Id, role, _options);
        }


    }
}

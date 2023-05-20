using Mapster;
using Moq;
using SigmaMovies.Application;
using SigmaMovies.Application.Exceptions;
using SigmaMovies.Application.Users;
using SigmaMovies.Application.Users.Repositories;
using SigmaMovies.Application.Users.Requests;
using SigmaMovies.Application.Users.Responses;
using SigmaMovies.Domain.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMoviesTest.Users
{
    public class UserTest
    {
        private User _userDomain;
        private readonly Mock<IUserRepository> userMockRepo = new Mock<IUserRepository> { DefaultValue = DefaultValue.Empty };
        private readonly Mock<IUnitOfWork> unitOfWorkRepo = new Mock<IUnitOfWork> { DefaultValue = DefaultValue.Empty };


        private readonly CancellationToken cancellationToken = new CancellationToken();
        private readonly UserService userService;
        int id;

        public UserTest()
        {
            userService = new UserService(userMockRepo.Object, unitOfWorkRepo.Object);
            id = 1;
            _userDomain = GetUser();
        }

        [Fact]
        private async Task WhenUserIsNull_ShouldThrowIncorrectEmailOrPasswordExceptionException()
        {
            //arrange
            _userDomain = null;
            userMockRepo.Setup(x => x.GetByUsernameAndPassword(cancellationToken, It.IsAny<string>(), It.IsAny<string>())).ReturnsAsync(_userDomain);

            //act
            var test = async () => await userService.AuthenticateAsync(cancellationToken, It.IsAny<string>(), It.IsAny<string>());


            //assert
            await Assert.ThrowsAsync<UserNotFoundException>(test);
        }


        [Fact]
        private async Task WhenUserIsNotFound_ShouldThrowUserNotFoundException()
        {
            //arrange
            userMockRepo.Setup(x => x.GetUserByUsername(cancellationToken, It.IsAny<string>())).ThrowsAsync(new UserNotFoundException());

            //act
            var test = async () => await userService.GetUserByUsername(cancellationToken, _userDomain.UserName);


            //assert
            await Assert.ThrowsAsync<UserNotFoundException>(test);
        }

        [Fact]
        private async Task WhenUserAlreadyExistsShouldThrowUserAlreadyExistsException()
        {
            //arrange
            userMockRepo.Setup(x => x.ExistsByUsername(cancellationToken, It.IsAny<string>())).ReturnsAsync(true);

            //act
            var test = async () => await userService.CreateAsync(cancellationToken, _userDomain.Adapt<UserRequestModel>());


            //assert
            await Assert.ThrowsAsync<UserAlreadyExistsException>(test);
        }

        private User GetUser()
        {
            User user = new User()
            {
                Id =this.id,
                CreatedAt = DateTime.Now,
                ModifiedAt = DateTime.Now,
                PasswordHash = "D",
                UserName = "D"
            };
            return user;
        }
    }
}

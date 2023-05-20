using Mapster;
using SigmaMovies.Application.Exceptions;
using SigmaMovies.Application.Users.Repositories;
using SigmaMovies.Application.Users.Requests;
using SigmaMovies.Application.Users.Responses;
using SigmaMovies.Domain.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace SigmaMovies.Application.Users
{
    public class UserService:IUserService
    {
        const string SECRET_KEY = "yek_TERCES";
        private readonly IUserRepository _repository;
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUserRepository repository, IUnitOfWork unitOfWork)
        {
            _repository = repository;
            _unitOfWork = unitOfWork;
        }

        public async Task<string> AuthenticateAsync(CancellationToken cancellationToken, string username, string password)
        {
            var hashed = GenerateHash(password);
            var userEntity = await _repository.GetByUsernameAndPassword(cancellationToken, username, hashed);

            if (userEntity == null)
                throw new UserNotFoundException("Username or password is incorrect");

            return userEntity.UserName;
        }


        private string GenerateHash(string input)
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


        public async Task<UserResponseModel> CreateAsync(CancellationToken cancellationToken, UserRequestModel userModel)
        {
            var exists = await _repository.ExistsByUsername(cancellationToken, userModel.Username);

            if (exists)
                throw new UserAlreadyExistsException("User already exists");

            userModel.Password = GenerateHash(userModel.Password);
            var userEntity = userModel.Adapt<User>();
            userEntity.UserName = userModel.Username;
            userEntity.PasswordHash = userModel.Password;
            userEntity.UserRole = "User";

            var createdUser = await _unitOfWork.User.CreateAsync(cancellationToken, userEntity);

            await _unitOfWork.Save(cancellationToken);

            return createdUser.Adapt<UserResponseModel>();
        }


      

        public async Task<UserResponseModel> GetUserByUsername(CancellationToken cancellationToken,string name)
        {
            try
            {
                var user = _repository.GetUserByUsername(cancellationToken, name);
                return (await user).Adapt<UserResponseModel>();
            }
            catch (Exception)
            {
                throw new UserNotFoundException("User not found");
            }
        }
    }
}

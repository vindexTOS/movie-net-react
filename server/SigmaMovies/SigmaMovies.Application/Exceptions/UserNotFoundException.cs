using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Exceptions
{
    public class UserNotFoundException : Exception
    {
       
            public UserNotFoundException() : base() { }
            public UserNotFoundException(string message) : base(message) { }
            public UserNotFoundException(string message, Exception e) : base(message, e) { }
    }

    public class InvalidUsernameOrPasswordException : Exception
    {

        public InvalidUsernameOrPasswordException() : base() { }
        public InvalidUsernameOrPasswordException(string message) : base(message) { }
        public InvalidUsernameOrPasswordException(string message, Exception e) : base(message, e) { }
    }

    public class UserAlreadyExistsException : Exception
    {

        public UserAlreadyExistsException() : base() { }
        public UserAlreadyExistsException(string message) : base(message) { }
        public UserAlreadyExistsException(string message, Exception e) : base(message, e) { }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Users.Responses
{
    public class UserResponseModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string UserRole { get; set; }
    }
}

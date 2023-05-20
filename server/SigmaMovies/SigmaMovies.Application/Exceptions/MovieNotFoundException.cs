using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Exceptions
{
    public class MovieNotFoundException : Exception
    {
        public MovieNotFoundException() : base() { }
        public MovieNotFoundException(string message) : base(message) { }
        public MovieNotFoundException(string message, Exception e) : base(message, e) { }
    }
}

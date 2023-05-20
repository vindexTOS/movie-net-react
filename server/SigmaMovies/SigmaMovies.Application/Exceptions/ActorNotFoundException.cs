using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Exceptions
{
    public class ActorNotFoundException : Exception
    {
            public ActorNotFoundException() : base() { }
            public ActorNotFoundException(string message) : base(message) { }
            public ActorNotFoundException(string message, Exception e) : base(message, e) { }
    }


}

using SigmaMovies.Domain.Movies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Actors.Responses
{
    public class ActorResponseModel
    {
        public string Name { get; set; }
        public string Img { get; set; }
        public List<Movie> Movies { get; set; }
    }
}

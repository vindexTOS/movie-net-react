using SigmaMovies.Application.Movies.Requests;
using SigmaMovies.Domain.Movies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Actors.Requests
{
    public class ActorRequestPutModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Img { get; set; }
        public List<MovieDTO> Movies { get; set; }
    }
}

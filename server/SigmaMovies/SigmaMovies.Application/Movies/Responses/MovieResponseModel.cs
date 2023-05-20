using SigmaMovies.Application.Actors.Requests;
using SigmaMovies.Application.Actors.Responses;
using SigmaMovies.Domain.Actors;
using SigmaMovies.Domain.Movies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Application.Movies.Responses
{
    public class MovieResponseModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Color { get; set; }
        public string Color2 { get; set; }
        public string Img { get; set; }
        public string Video { get; set; }
        public string Description { get; set; }
        public List<ActorDto> Actors { get; set; }
        public Rating Rating { get; set; }
        public Metadata Metadata { get; set; }
    }
}

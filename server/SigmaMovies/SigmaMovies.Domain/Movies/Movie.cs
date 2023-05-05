using SigmaMovies.Domain.Actors;
using SigmaMovies.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Domain.Movies
{
    public class Movie : EntityBase
    {
        public string Title { get; set; }
        public string Color { get; set; }
        public string Color2 { get; set; }
        public string Img { get; set; }
        public string Video { get; set; }
        public string Description { get; set; }
        public List<Actor> Actors { get; set; }
        public Rating Rating { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ModifiedAt { get; set; }
    }

    

    public class Rating
    {
        public double IMDb { get; set; }
        public int RottenTomatoes { get; set; }
    }

}

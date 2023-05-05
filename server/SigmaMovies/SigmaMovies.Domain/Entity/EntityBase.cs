using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Domain.Entity
{
    public abstract class EntityBase : IEntityBase
    {
        public int Id { get; set; }
        public bool IsDeleted { get; set; }
    }
}

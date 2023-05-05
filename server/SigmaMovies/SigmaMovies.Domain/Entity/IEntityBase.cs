using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaMovies.Domain.Entity
{
    public interface IEntityBase
    {
        int Id { get; set; }

        bool IsDeleted { get; set; }
    }
}

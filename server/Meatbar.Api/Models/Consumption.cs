using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meatbar.Api.Models
{
    public class Consumption
    {
        public int PersonId { get; set; }
        public int BarTypeId { get; set; }
        public DateTime Date { get; set; }
    }
}

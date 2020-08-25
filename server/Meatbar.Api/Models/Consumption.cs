using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meatbar.Api.Models
{
    public class Consumption
    {
        public string PersonId { get; set; }
        public string BarTypeId { get; set; }
        public DateTime Date { get; set; }
    }
}

using System;

namespace Meatbar.Api.Models
{
    public class OrderHistory
    {
        public string Person { get; set; }
        public string MeatBarType { get; set; }
        public DateTime Date { get; set; }
    }
}

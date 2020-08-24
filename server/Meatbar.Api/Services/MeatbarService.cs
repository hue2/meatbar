using Meatbar.Api.Interfaces;
using Meatbar.Api.Models;
using System;
using System.Collections.Generic;
using System.IO;

namespace Meatbar.Api.Services
{
    public class MeatbarService : IMeatbarService
    {
        public List<OrderHistory> Get()
        {
            var result = new List<OrderHistory>();

            using (var reader = new StreamReader(@"Services/data.csv"))
            {
                reader.ReadLine();
                
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();
                    var values = line.Split(',');

                    var orderHistory = new OrderHistory()
                    {
                        Person = values[0],
                        MeatBarType = values[1],
                        Date = Convert.ToDateTime(values[2]),
                    };

                    result.Add(orderHistory);        
                }
            }

            return result;
        }
    }
}

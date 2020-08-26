using Meatbar.Api.Interfaces;
using Meatbar.Api.Models;
using System;
using System.Collections.Generic;
using System.IO;

namespace Meatbar.Api.Services
{
    public class MeatbarService : IMeatbarService
    {
        public List<Person> GetPeople()
        {
            var data = new List<Person>()
            {
                new Person()
                {
                    Id = 1,
                    Name = "ashton"
                },
                 new Person()
                {
                    Id = 2,
                    Name = "bob"
                },
                  new Person()
                {
                    Id = 3,
                    Name = "chuck"
                },
            };

            return data;
        }

        public List<BarType> GetBarTypes()
        {
            var data = new List<BarType>()
            {
                new BarType()
                {
                    Id = 99,
                    Name = "beef"
                },
                   new BarType()
                {
                    Id = 97,
                    Name = "bison"
                },
                 new BarType()
                {
                    Id = 98,
                    Name = "lamb"
                },          
            };

            return data;
        }

        public List<Consumption> GetConsumptions()
        {
            var result = new List<Consumption>();

            using (var reader = new StreamReader(@"Services/consumption.csv"))
            {
                reader.ReadLine();
                
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();
                    var values = line.Split(',');

                    var consumption = new Consumption()
                    {
                        PersonId = Convert.ToInt32(values[0]),
                        BarTypeId = Convert.ToInt32(values[1]),
                        Date = Convert.ToDateTime(values[2]),
                    };

                    result.Add(consumption);        
                }
            }

            return result;
        }
    }
}

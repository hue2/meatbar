using Meatbar.Api.Models;
using System.Collections.Generic;

namespace Meatbar.Api.Interfaces
{
    public interface IMeatbarService
    {
        List<Person> GetPeople();
        List<BarType> GetBarTypes();
        List<Consumption> GetConsumptions();
    }
}

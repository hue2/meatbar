using Meatbar.Api.Models;
using System.Collections.Generic;

namespace Meatbar.Api.Interfaces
{
    public interface IMeatbarService
    {
        List<OrderHistory> Get();
    }
}

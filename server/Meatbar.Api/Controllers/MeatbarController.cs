using Meatbar.Api.Interfaces;
using Meatbar.Api.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Meatbar.Api.Controllers
{
    [EnableCors("AllowAll")]
    [ApiController]
    [Route("[controller]")]
    public class MeatbarController : ControllerBase
    {
        private IMeatbarService _service;
        public MeatbarController(IMeatbarService service)
        {
            _service = service;
        }

        [HttpGet("people")]
        public IEnumerable<Person> GetPeople()
        {
            return _service.GetPeople();
        }

        [HttpGet("bar-types")]
        public IEnumerable<BarType> GetBarTypes()
        {
            return _service.GetBarTypes();
        }

        [HttpGet("consumption")]
        public IEnumerable<Consumption> Get()
        {
            return _service.GetConsumptions();
        }
    }
}

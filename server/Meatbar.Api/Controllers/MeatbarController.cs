using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Meatbar.Api.Interfaces;
using Meatbar.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Meatbar.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MeatbarController : ControllerBase
    {
        private IMeatbarService _service;
        public MeatbarController(IMeatbarService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<OrderHistory> Get()
        {
            return _service.Get();
        }
    }
}

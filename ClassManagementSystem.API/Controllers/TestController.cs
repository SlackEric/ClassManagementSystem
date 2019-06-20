using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MvcAngular;
using ClassManagementSystem.API.Dtos;

namespace ClassManagementSystem.API.Controllers
{
    [Angular]
    public class TestController: Controller
    {
        [HttpGet]
        public IntValue Add(int a, int b)
        {
            return new IntValue()
            {
                Value = a + b
            };
        }
    }
}

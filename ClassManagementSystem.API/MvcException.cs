using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClassManagementSystem.API
{
    public class MvcException : Exception
    {
        public int StatusCode { get; private set; }
        public MvcException(int statusCode, string message) : base(message)
        {
            StatusCode = statusCode;
        }
    }
}

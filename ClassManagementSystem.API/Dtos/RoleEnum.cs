using MvcAngular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClassManagementSystem.API.Dtos
{
    [AngularType]
    public enum RoleEnum
    {
        Administrator,
        User,
        Visitor
    }
}
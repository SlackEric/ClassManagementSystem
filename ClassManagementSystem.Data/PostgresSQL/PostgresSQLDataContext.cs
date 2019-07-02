using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using ClassManagementSystem.Data.Entities;

namespace ClassManagementSystem.Data.PostgresSQL
{
    public class PostgresSQLDataContext : DbContext
    {
        public PostgresSQLDataContext(DbContextOptions<PostgresSQLDataContext> contextOptions) : base(contextOptions)
        {
        }
        public DbSet<StudentEntity> Students { get; set; }
        public DbSet<ClassEntity> Classes { get; set; }
    }
}


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
        /*
        public DbSet<AnimalEntity> Animals { get; set; }
        public DbSet<PersonEntity> Persons { get; set; }
        public DbSet<FriendShipEntity> FriendShip { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FriendShipEntity>()
                .HasIndex(friend => friend.FromPerson);
            modelBuilder.Entity<FriendShipEntity>()
                .HasIndex(friend => friend.ToPerson);
            base.OnModelCreating(modelBuilder);
        }
        */
    }
}


﻿using Game_Buddy_Finder.Models;
using Microsoft.EntityFrameworkCore;

namespace Game_Buddy_Finder.Data
{
    public class GbfContext : DbContext
    {
        public GbfContext(DbContextOptions<GbfContext> options) : base(options)
        { }

        public DbSet<User> Users { get; set; }
        public DbSet<LoginAttempt> LoginAttempts { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Friend> Friends { get; set; }
        public DbSet<FriendRequest> FriendRequests { get; set; }
        public DbSet<Interest> Interests { get; set; }
        public DbSet<Clan> Clans { get; set; }
        public DbSet<ClanMembership> ClanMemberships { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        //Might use later to enforce rules
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            /*builder.Entity<User>().ToTable("Users");
            builder.Entity<LoginAttempt>().ToTable("LoginAttempts");*/

            /*builder.Entity<Login>().HasCheckConstraint("CH_Login_LoginID", "len(LoginID) = 8").
                HasCheckConstraint("CH_Login_PasswordHash", "len(PasswordHash) = 64");
            builder.Entity<Transaction>().
                HasOne(x => x.DestinationAccount).WithMany(x => x.Transactions).HasForeignKey(x => x.AccountNumber);
            builder.Entity<Transaction>().HasCheckConstraint("CH_Transaction_Amount", "Amount > 0");*/
        }
    }
}

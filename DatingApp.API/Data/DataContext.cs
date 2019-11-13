using Microsoft.EntityFrameworkCore;
using DatingApp.API.Models;


namespace DatingApp.API.Data

{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Value> Values { get; set; }
        // dodanie user
        public DbSet<User> Users { get; set; }
        // dodanie zdjecia do bazy, po migracji bedzie z tego tabela
        // dotnet ef migrations add ExtendedUserClass - pojawił się problem z nullami i onDeletem zle
        // dotnet ef database update rereaating db and using last migration
        // 71. tt
        public DbSet<Photo> Photos { get; set; }        
    }
 
}
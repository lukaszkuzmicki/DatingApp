using System;

namespace DatingApp.API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        // dzieki temu co tu zrobiliśmy wynikiem migraci będzie:  jeżeli skasujemy usera to skasujemy też zdjęcia -> onDelete: ReferentialAction.Cascade itp
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
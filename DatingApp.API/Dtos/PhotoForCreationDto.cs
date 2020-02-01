using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Dtos
{
    public class PhotoForCreationDto
    {
        public string Url { get; set; }

        // zdjecie ktore bedziemy uplodowac
        public IFormFile File { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }

        //from cloudunary    
        public string PublicId { get; set; }

        public PhotoForCreationDto(){
            DateAdded = DateTime.Now;
        }


    }
}


using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{    

     // first part of controler name is substitiuted by [contoller], in our case first controller name is UsersController and first part is Users
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
            
    }
}
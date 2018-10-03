using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using React_DotnetCore_SignalR_Chat.Models;
using React_DotnetCore_SignalR_Chat.Services;
using React_DotnetCore_SignalR_Chat.User;

namespace React_DotnetCore_SignalR_Chat.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class ChatController : Controller
    {
        private readonly IChatService _chatService;
        private readonly IUserTracker _userTracker;

        public ChatController(IChatService chatService, IUserTracker userTracker)
        {
            _chatService = chatService;
            _userTracker = userTracker;
        }
        // GET: api/<controller>
        [HttpGet("[action]")]
        public IEnumerable<UserDetails> LoggedOnUsers()
        {
            return _userTracker.UsersOnline();
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<ChatMessage>> InitialMessages()
        {
            return await _chatService.GetAllInitially();
        }
    }
}

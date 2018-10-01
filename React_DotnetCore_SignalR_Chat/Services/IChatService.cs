using React_DotnetCore_SignalR_Chat.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React_DotnetCore_SignalR_Chat.Services
{
    public interface IChatService
    {
        Task<IEnumerable<ChatMessage>> GetAllInitially();
        Task<ChatMessage> CreateNewMessage(string senderName, string message);
    }
}

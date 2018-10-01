using React_DotnetCore_SignalR_Chat.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React_DotnetCore_SignalR_Chat.Services
{
    public interface IChatMessageRepository
    {
        Task AddMessage(ChatMessage message);
        Task<IEnumerable<ChatMessage>> GetTopMessages(int number = 100);
    }
}

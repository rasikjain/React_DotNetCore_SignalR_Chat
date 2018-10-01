using React_DotnetCore_SignalR_Chat.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React_DotnetCore_SignalR_Chat.User
{
    public interface IUserTracker
    {
        IEnumerable<UserDetails> UsersOnline();
        void AddUser(string sid, string name);
        void RemoveUser(string sid);

        event Action<UserDetails> UserJoined;
        event Action<UserDetails> UserLeft;
    }
}

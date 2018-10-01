using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using React_DotnetCore_SignalR_Chat.Models;
using React_DotnetCore_SignalR_Chat.User;

namespace React_DotnetCore_SignalR_Chat.Hubs
{
    public abstract class HubWithPresence : Hub
    {
        private IUserTracker _userTracker;

        public HubWithPresence(IUserTracker userTracker)
        {
            _userTracker = userTracker;
            _userTracker.UserJoined += OnUsersJoined;
            _userTracker.UserLeft += OnUsersLeft;
        }

        public virtual async void OnUsersJoined(UserDetails user) { }

        public virtual async void OnUsersLeft(UserDetails user) { }
    }
}

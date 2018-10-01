using React_DotnetCore_SignalR_Chat.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage.Table;

namespace React_DotnetCore_SignalR_Chat.Services
{
    public class ChatMessageTableEntity : TableEntity
    {
        public ChatMessageTableEntity(string key)
        {
            PartitionKey = "chatmessages";
            RowKey = key;
        }

        public ChatMessageTableEntity() { }

        public string Message { get; set; }

        public string Sender { get; set; }
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signalr_1 = require("@aspnet/signalr");
var ChatWebsocketService = /** @class */ (function () {
    function ChatWebsocketService() {
        var host = document.location.host;
        var url = "http://" + host + "/chat";
        // create Connection
        this._connection = new signalr_1.HubConnectionBuilder().withUrl(url, signalr_1.HttpTransportType.WebSockets).configureLogging(signalr_1.LogLevel.Information).build();
        // start connection
        this._connection.start().catch(function (err) { return console.error(err, 'red'); });
    }
    ChatWebsocketService.prototype.registerMessageAdded = function (messageAdded) {
        // get nre chat message from the server
        this._connection.on('MessageAdded', function (message) {
            messageAdded(message);
        });
    };
    ChatWebsocketService.prototype.sendMessage = function (message) {
        // send the chat message to the server
        this._connection.invoke('AddMessage', message);
    };
    ChatWebsocketService.prototype.registerUserLoggedOn = function (userLoggedOn) {
        // get new user from the server
        this._connection.on('UserLoggedOn', function (user) {
            userLoggedOn(user);
        });
    };
    return ChatWebsocketService;
}());
var WebsocketService = new ChatWebsocketService();
exports.default = WebsocketService;
//# sourceMappingURL=WebsocketService.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebsocketService_1 = require("./WebsocketService");
var ChatService = /** @class */ (function () {
    function ChatService(messageAdded) {
        var _this = this;
        this._messageAdded = messageAdded;
        // Chat-Nachrichten vom Server empfangen
        WebsocketService_1.default.registerMessageAdded(function (message) {
            _this._messageAdded(message);
        });
    }
    ChatService.prototype.addMessage = function (message) {
        WebsocketService_1.default.sendMessage(message);
    };
    ChatService.prototype.fetchInitialMessages = function (fetchInitialMessagesCallback) {
        fetch('api/Chat/InitialMessages')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            fetchInitialMessagesCallback(data);
        });
        //fetch('api/Chat/InitialMessages')
        //    .then(response => console.log(response.json()));
    };
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=ChatService.js.map
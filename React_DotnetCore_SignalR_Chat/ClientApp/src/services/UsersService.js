"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebsocketService_1 = require("./WebsocketService");
var UsersService = /** @class */ (function () {
    function UsersService(socketCallback) {
        var _this = this;
        this._userLoggedOn = socketCallback;
        // Chat-Nachrichten vom Server empfangen
        WebsocketService_1.default.registerUserLoggedOn(function (user) {
            _this._userLoggedOn(user);
        });
    }
    UsersService.prototype.fetchLogedOnUsers = function (fetchUsersCallback) {
        fetch('api/Chat/LoggedOnUsers')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            fetchUsersCallback(data);
        });
    };
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=UsersService.js.map
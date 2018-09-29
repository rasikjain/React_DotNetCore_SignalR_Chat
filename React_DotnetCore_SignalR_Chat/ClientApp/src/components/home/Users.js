"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            users: [
                { id: 1, name: 'juergen' },
                { id: 3, name: 'marion' },
                { id: 2, name: 'peter' },
                { id: 4, name: 'mo' }
            ]
        };
        return _this;
    }
    Users.prototype.render = function () {
        return React.createElement("div", { className: 'panel panel-default' },
            React.createElement("div", { className: 'panel-body' },
                React.createElement("h3", null, "Users online:"),
                React.createElement("ul", { className: 'chat-users' }, this.state.users.map(function (user) {
                    return React.createElement("li", { key: user.id }, user.name);
                }))));
    };
    return Users;
}(React.Component));
exports.Users = Users;
//# sourceMappingURL=Users.js.map
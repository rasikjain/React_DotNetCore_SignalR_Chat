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
var Chat_1 = require("./home/Chat");
var Users_1 = require("./home/Users");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return React.createElement("div", { className: 'row' },
            React.createElement("div", { className: 'col-sm-3' },
                React.createElement(Users_1.Users, null)),
            React.createElement("div", { className: 'col-sm-9' },
                React.createElement(Chat_1.Chat, null)));
    };
    return Home;
}(React.Component));
exports.Home = Home;
//# sourceMappingURL=Home.js.map
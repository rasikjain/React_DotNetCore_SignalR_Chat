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
var moment = require("moment");
var ChatService_1 = require("../../services/ChatService");
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            messages: [],
            currentMessage: ''
        };
        var that = _this;
        _this._chatService = new ChatService_1.ChatService(function (msg) {
            _this.handleOnSocket(that, msg);
        });
        _this.handleOnInitialMessagesFetched = _this.handleOnInitialMessagesFetched.bind(_this);
        _this.handlePanelRef = _this.handlePanelRef.bind(_this);
        _this.handleMessageRef = _this.handleMessageRef.bind(_this);
        _this.handleMessageChange = _this.handleMessageChange.bind(_this);
        _this.onSubmit = _this.onSubmit.bind(_this);
        _this._chatService.fetchInitialMessages(_this.handleOnInitialMessagesFetched);
        return _this;
    }
    Chat.prototype.render = function () {
        return React.createElement("div", { className: 'panel panel-default' },
            React.createElement("div", { className: 'panel-body panel-chat', ref: this.handlePanelRef },
                React.createElement("ul", null, this.state.messages.map(function (message) {
                    return React.createElement("li", { key: message.id },
                        React.createElement("strong", null,
                            message.sender,
                            " "),
                        "(",
                        moment(message.date).format('HH:mm:ss'),
                        ")",
                        React.createElement("br", null),
                        message.message);
                }))),
            React.createElement("div", { className: 'panel-footer' },
                React.createElement("form", { className: 'form-inline', onSubmit: this.onSubmit },
                    React.createElement("label", { className: 'sr-only', htmlFor: 'msg' }, "Amount (in dollars)"),
                    React.createElement("div", { className: 'input-group col-md-12' },
                        React.createElement("button", { type: 'button', className: 'chat-button input-group-addon' }, ":-)"),
                        React.createElement("input", { type: 'text', value: this.state.currentMessage, onChange: this.handleMessageChange, className: 'form-control', id: 'msg', placeholder: 'Your message', ref: this.handleMessageRef }),
                        React.createElement("button", { className: 'chat-button input-group-addon' }, "Send")))));
    };
    Chat.prototype.handleOnInitialMessagesFetched = function (messages) {
        this.setState({
            messages: messages
        });
        this.scrollDown(this);
    };
    Chat.prototype.handleOnSocket = function (that, message) {
        var messages = that.state.messages;
        messages.push(message);
        that.setState({
            messages: messages,
            currentMessage: ''
        });
        that.scrollDown(that);
        that.focusField(that);
    };
    Chat.prototype.handlePanelRef = function (div) {
        this.panel = div;
    };
    Chat.prototype.handleMessageRef = function (input) {
        this.msg = input;
    };
    Chat.prototype.handleMessageChange = function (event) {
        this.setState({
            currentMessage: event.target.value
        });
    };
    Chat.prototype.onSubmit = function (event) {
        event.preventDefault();
        this.addMessage(this);
    };
    Chat.prototype.addMessage = function (that) {
        var currentMessage = that.state.currentMessage;
        if (currentMessage.length === 0) {
            return;
        }
        this._chatService.addMessage(currentMessage);
    };
    Chat.prototype.focusField = function (that) {
        that.msg.focus();
    };
    Chat.prototype.scrollDown = function (that) {
        var div = that.panel;
        div.scrollTop = div.scrollHeight;
    };
    return Chat;
}(React.Component));
exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map
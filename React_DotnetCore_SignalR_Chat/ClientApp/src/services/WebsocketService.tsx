import { HubConnection, HttpTransportType, LogLevel, HubConnectionBuilder } from '@aspnet/signalr';
import { ChatMessage } from './Models/ChatMessage';
import { User }from './Models/User';

class ChatWebsocketService {
    private _connection: HubConnection;

    constructor() {
        const host : string = document!.location!.host;
       
        let url: string = `http://${host}/chat`;

        // create Connection
        this._connection = new HubConnectionBuilder().withUrl(url, HttpTransportType.WebSockets).configureLogging(LogLevel.Information).build();
        // start connection
        this._connection.start().catch(err => console.error(err, 'red'));
    }

    registerMessageAdded(messageAdded: (msg: ChatMessage) => void) {
        // get nre chat message from the server
        this._connection.on('MessageAdded', (message: ChatMessage) => {
            messageAdded(message);
        });
    }
    sendMessage(message: string) {
        // send the chat message to the server
        this._connection.invoke('AddMessage', message);
    }

    registerUserLoggedOn(userLoggedOn: (user: User) => void) {
        // get new user from the server
        this._connection.on('UserLoggedOn', (user: User) => {
            userLoggedOn(user);
        });
    }
}

const WebsocketService = new ChatWebsocketService();

export default WebsocketService;
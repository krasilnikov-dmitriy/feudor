import { User } from "../user/users";
import {Chat} from '../chat/chatsList';

export class Message{
    public message: string;
    // public sender: User;
    public chat: Chat;
  }
export var MessagesHistory: Message[] = [
    {message:' pew-pew-pew ', chat: {name: 'chat 1'} }  
]
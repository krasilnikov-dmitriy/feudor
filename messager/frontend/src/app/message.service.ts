import { Injectable } from '@angular/core';
import { Message, MessagesHistory }from './messages/messages';

@Injectable()
export class MessageService { 
  
    add(message:Message){
      MessagesHistory.push(message);
    }
  
}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';
import {ChatComponent } from './chat/chat.component';
import { Chat , ChatList } from './chat/chatsList';

@Injectable()
export class ChatService {
  constructor(private messageService: MessageService , private chatList:  Chat[]) { }
  
  getChats():Observable<Chat[]>{  
    // this.messageService.add(`ChatService : fetched chats`);  
    return of(this.chatList);
  }
  getChat(name: string ):Observable<Chat> {
    // this.messageService.add(`ChatService: fetched chat name =${name}`);
    return of(this.chatList.find(chat => chat.name === name));
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ChatList, Chat } from './chatsList';
import { ModalComponent } from '../modal/modal.component';
import { HomeComponent } from '../modal/home.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() newName: string;

  chatList = ChatList;
  selectedChat: Chat;
  modal: HomeComponent;

  _chat: Chat;

  constructor() { }

  ngOnInit() {
  }

  newChat() {
    this.modal.openModal('new-chat');
    
  }

  newChatCreated(text) {
    this._chat.name=text;
    this.chatList.push(this._chat);
    this.modal.closeModal('new-chat');
  }

  onSelect() {
    this.selectedChat;
  }
}

// export class ChatModal{
//   @Input() isConfirmed: boolean;
//   @Input() Name:string;
//   private ModalIsVisible:boolean = true;
//   constructor(confirmed: boolean, name: string){
//       this.name=name;
//       this.confirmed=confirmed;
//   }
//   public name : string;
//   public confirmed: boolean;

//   public closeModal(isConfirmed:boolean,login:string) : void { 
//     this.ModalIsVisible=false;
//     this.name=login;
//   }}


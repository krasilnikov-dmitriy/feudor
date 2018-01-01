import { Component, OnInit } from '@angular/core';
import { Message, MessagesHistory } from './messages';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  newMessage: Message;

  constructor() { }

  ngOnInit() {

  }
  
  Send(){
    MessagesHistory.push(this.newMessage);
  }
}

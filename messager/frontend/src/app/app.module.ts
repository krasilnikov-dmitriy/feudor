import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ChatComponent } from './chat/chat.component';
import { MessagesComponent } from './messages/messages.component';
import { UserService } from './user.service';
import { ChatService } from './chat.service';
import { MessageService } from './message.service';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './modal/home.component';
// import { ModalElement } from './user/modal';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChatComponent,
    MessagesComponent,
    ModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [UserService, ChatService, MessageService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

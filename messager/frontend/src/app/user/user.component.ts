import { Component, OnInit ,Input } from '@angular/core';
import {UserList, User } from './users';
import { UserService } from '../user.service';
import { HomeComponent } from '../modal/home.component';
import { ModalService } from '../modal.service';
import { TemplateBinding } from '@angular/compiler';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService,
              private modalService: BsModalService) { }
 
  modalElement: HomeComponent; 
  
  newUser:User;
  // userList=UserList;
  Name: string;
  ngOnInit() { 
  }

  Next(): void{   
    // this.newUser.name=this.Name;
    // this.newUser.name=this.modalElement.Name;
    UserList.push(this.newUser);
  }
}
import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { Input } from '@angular/core/src/metadata/directives';

var condition=true;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
 public modalRef: BsModalRef;
 constructor( private modalService:BsModalService){
   condition=true;
 }

 public openModal(template: TemplateRef<any>){
   this.modalRef= this.modalService.show(template);
 }
 public closeModal(){
    this.modalService.hide(1);
    condition=false;
 }
}

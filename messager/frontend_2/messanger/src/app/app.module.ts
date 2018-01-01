import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { Component } from '@angular/core/src/metadata/directives';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



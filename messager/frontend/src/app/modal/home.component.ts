import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
// @Component({
//    moduleId: module.id,
//    selector:'app-modal',
//    templateUrl: './modal.component.html'
// })

export class HomeComponent implements OnInit{
   private bodyText: string;
   public ID : string;

   constructor(private modalService: ModalService) {
   }

   ngOnInit() {
   }

   openModal(id: string){
       this.modalService.open(id);
   }



   closeModal(id: string){
       this.modalService.close(id);
   }
}
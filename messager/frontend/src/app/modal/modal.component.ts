// import { Component, ViewContainerRef } from '@angular/core';
// import { Overlay } from 'ngx-modialog';
// import { Modal } from 'ngx-modialog/plugins/bootstrap';

// @Component({
//   selector: 'my-modal',
//   template: `<button (click)="onClick()">Alert</button>`
// })
// export class ModalComponent {
//   constructor(public modal: Modal) { }

//   onClick() {
//     const dialogRef = this.modal.alert()
//         .size('lg')
//         .showClose(true)
//         .title('A simple Alert style modal window')
//         .body(`
//             <h4>Alert is a classic (title/body/footer) 1 button modal window that 
//             does not block.</h4>
//             <b>Configuration:</b>
//             <ul>
//                 <li>Non blocking (click anywhere outside to dismiss)</li>
//                 <li>Size large</li>
//                 <li>Dismissed with default keyboard key (ESC)</li>
//                 <li>Close wth button click</li>
//                 <li>HTML content</li>
//             </ul>`)
//         .open();

//     dialogRef.result
//         .then( result => alert(`The result is: ${result}`) );
//   }
// }





import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { JQuery } from 'jquery';
import * as $ from 'jquery';

import { HomeComponent } from '../modal/home.component';
import { ModalService } from '../modal.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'modal',
    template: '<ng-content></ng-content>'
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: JQuery;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = $(el.nativeElement);
    }

    ngOnInit(): void {
        let modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');

        // close modal on background click
        this.element.on('click', function (e: any) {
            var target = $(e.target);
            if (!target.closest('.modal-body').length) {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        this.element.show();
        $('body').addClass('modal-open');
    }

    // close modal
    close(): void {
        this.element.hide();
        $('body').removeClass('modal-open');
    }
}
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    templateUrl: 'form-dialog.component.html',
    selector: 'app-form-dialog',
    styleUrls: ['./styles/form-dialog.component.scss'],
})

export class FormDialogComponent {
    @Input() public isOpenModal = false;
    @Output() public closeModalEvent = new EventEmitter<boolean>();

    public closeModal(): void {
        this.closeModalEvent.emit(false);
    }
}

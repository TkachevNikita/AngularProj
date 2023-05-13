import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    templateUrl: './form-dialog.component.html',
    selector: 'app-form-dialog',
    styleUrls: ['./styles/form-dialog.component.scss'],
})

export class FormDialogComponent {
  @Input() isOpenModal = false;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModal() {
    this.isOpenModal = false;
    this.closeModalEvent.emit(false);
  }
}

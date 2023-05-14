import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  templateUrl: 'event-dialog.component.html',
  selector: 'app-event-dialog',
  styleUrls: ['styles/event-dialog.component.scss']
})

export class EventDialogComponent {
  @Input() members!: string[];
  @Input() isEventDialogOpen: boolean = false;
  @Input() title!: string;
  @Output() isEventDialogClose = new EventEmitter<boolean>();


  public closeDialog() {
    this.isEventDialogClose.emit();
  }
}

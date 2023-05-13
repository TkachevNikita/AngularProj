import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CalendarEvent } from "angular-calendar";

@Component({
    templateUrl: './form.component.html',
    selector: 'app-form',
    styleUrls: ['./styles/form.component.scss'],
})
export class FormComponent {
  public eventForm: FormGroup;
  @Output() submitEvent = new EventEmitter<CalendarEvent>();

  constructor() {
    this.eventForm = new FormGroup({
      eventTitle: new FormControl(),
      eventMembers: new FormControl(),
      eventDuration: new FormControl()
    });
  }

  public onSubmit(): void {
    this.submitEvent.emit(this.eventForm.value)
    console.log(this.eventForm.value);
  }
}

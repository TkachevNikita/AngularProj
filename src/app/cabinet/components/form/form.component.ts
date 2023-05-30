import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarEvent } from 'angular-calendar';

@Component({
    templateUrl: './form.component.html',
    selector: 'app-form',
    styleUrls: ['./styles/form.component.scss'],
})
export class FormComponent {
    public eventForm: FormGroup;
    @Output() public submitEvent = new EventEmitter<CalendarEvent>();

    constructor() {
        this.eventForm = new FormGroup({
            eventTitle: new FormControl('', Validators.required),
            eventMembers: new FormControl('', Validators.required),
            eventDuration: new FormControl('', Validators.required)
        });
    }

    public onSubmit(): void {
        this.submitEvent.emit(this.eventForm.value);
        console.log(this.eventForm.value);
    }
}

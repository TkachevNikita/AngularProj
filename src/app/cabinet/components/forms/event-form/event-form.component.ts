import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarEvent } from 'angular-calendar';

@Component({
    templateUrl: './event-form.component.html',
    selector: 'app-form',
    styleUrls: ['./styles/event-form.component.scss'],
})
export class EventFormComponent {
    public eventForm: FormGroup;
    public startHours: number[] = this.populateHoursArray(0, 23);
    public endHours: number[] = this.populateHoursArray(1, 24);
    @Output() public submitEvent = new EventEmitter<CalendarEvent>();

    constructor() {
        this.eventForm = new FormGroup({
            eventTitle: new FormControl('', Validators.required),
            eventMembers: new FormControl('', Validators.required),
            eventStart: new FormControl('', Validators.required),
            eventEnd: new FormControl('', Validators.required)
        });
    }

    public populateHoursArray(start: number, end: number): number[] {
        const result = [];
        for (let i = start; i <= end; i++) {
            result.push(i);
        }

        return result;
    }

    public onSubmit(): void {
        this.submitEvent.emit(this.eventForm.value);
        console.log(this.eventForm.value);
    }
}

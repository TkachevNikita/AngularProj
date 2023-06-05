import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarEvent } from 'angular-calendar';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';

@Component({
    templateUrl: './event-form.component.html',
    selector: 'app-form',
    styleUrls: ['./styles/event-form.component.scss'],
})
export class EventFormComponent {
    public eventForm: FormGroup;
    public startHours: number[] = this.populateHoursArray(0, 23);
    public endHours: number[] = this.populateHoursArray(1, 24);
    public employees!: EmployeeModel[];
    @Output() public submitEvent = new EventEmitter<CalendarEvent>();

    constructor(private _employeeService: EmployeeService, private _userService: UserService) {
        this.eventForm = new FormGroup({
            eventTitle: new FormControl('', Validators.required),
            eventMembers: new FormControl('', Validators.required),
            eventStart: new FormControl('', Validators.required),
            eventEnd: new FormControl('', Validators.required)
        });
        _employeeService.getEmployees().subscribe(employees => {
            this.employees = employees.filter(
                employee => employee.id !== this._userService.user.id);
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

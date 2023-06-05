import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CalendarEvent } from 'angular-calendar';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';

const startEndValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const startValue = control.get('eventStart')?.value;
    const endValue = control.get('eventEnd')?.value;

    if (startValue !== null && endValue !== null && startValue >= endValue) {
        return { 'startGreaterThanEnd': true };
    }

    return null;
};

@Component({
    templateUrl: './event-form.component.html',
    selector: 'app-form',
    styleUrls: ['./styles/event-form.component.scss'],
})
export class EventFormComponent {
    public eventForm: FormGroup;
    @Input() public startHours!: number[];
    @Input() public endHours!: number[];
    public employees!: EmployeeModel[];
    @Output() public submitEvent = new EventEmitter<CalendarEvent>();

    constructor(private _employeeService: EmployeeService, private _userService: UserService) {
        this.eventForm = new FormGroup({
            eventTitle: new FormControl('', Validators.required),
            eventMembers: new FormControl('', Validators.required),
            eventStart: new FormControl('', Validators.required),
            eventEnd: new FormControl('', Validators.required)
        }, { validators: startEndValidator });
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

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';

@Component({
    selector: 'app-login-employee-form',
    templateUrl: 'employee-login-form.component.html',
    styleUrls: ['.././styles/login-forms.components.scss']
})
export class EmployeeLoginFormComponent {
    public loginForm: FormGroup;
    public employees!: EmployeeModel[];

    constructor
    (
        private _userService: UserService,
        private _router: Router,
        private _storage: LocalStorageService,
        private _employeeService: EmployeeService
    ) {
        this.loginForm = new FormGroup({
            loginEmployee: new FormControl('', Validators.required),
            loginPassword: new FormControl('', Validators.required),
        });

        this._employeeService.getEmployees()
            .subscribe((employees) => this.employees = employees);
    }

    public onSubmit(): void {
        const user = this.loginForm.controls['loginEmployee'].value;
        if (this.loginForm.valid) {
            if (this._storage.getItem(user.id)) {
                user.eventLimit = this._storage.getItem(user.id).eventsLimit;
            }
            user.isAuth = true;
            this._userService.user = user;
            this._router.navigate(['/cabinet/calendar']);
            this._storage.setItem('user', JSON.stringify(user));
            console.log(this._userService.user);
        }
    }
}

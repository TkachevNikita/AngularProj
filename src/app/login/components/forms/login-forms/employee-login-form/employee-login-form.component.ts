import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login-employee-form',
    templateUrl: 'employee-login-form.component.html',
    styleUrls: ['.././styles/login-forms.components.scss']
})
export class EmployeeLoginFormComponent {
    public loginForm: FormGroup;

    constructor
    (
        private _userService: UserService,
        private _router: Router
    ) {
        this.loginForm = new FormGroup({
            loginEmployee: new FormControl('', Validators.required),
            loginPassword: new FormControl('', Validators.required),
        });
    }

    public onSubmit(): void {
        const user = this.loginForm.controls['loginEmployee'].value;
        if (this.loginForm.valid) {
            user.isAuth = true;
            this._userService.user = user;
            this._router.navigate(['/cabinet/calendar']);
            console.log(this._userService.user);
        }
    }
}

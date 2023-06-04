import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login-admin-form',
    templateUrl: 'admin-login-form.component.html',
    styleUrls: ['.././styles/login-forms.components.scss']
})
export class AdminLoginFormComponent {
    public loginForm: FormGroup;

    constructor
    (
      private _userService: UserService,
      private _router: Router
    ) {
        this.loginForm = new FormGroup({
            loginPassword: new FormControl('', Validators.required)
        });

    }

    public onSubmit(): void {
        const user = this.loginForm.value;
        if (this.loginForm.valid) {
            user.name = 'Администратор';
            user.isAdmin = true;
            user.isAuth = true;
            this._userService.user = user; //kak?
            console.log(this._userService.user);
            this._router.navigate(['/cabinet/calendar']);
        }
    }
}

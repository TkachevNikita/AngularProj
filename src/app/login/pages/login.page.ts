import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IEmployee } from 'src/app/interfaces/employess.interface';
import { UserService } from 'src/app/services/user.service';
import { USER_TOKEN } from 'src/app/tokens/user.token';

@Component({
    templateUrl: 'login.page.html',
    styleUrls: ['./styles/login.page.scss']
})
export class LoginPageComponent {
    public loginForm!: FormGroup;
    constructor (
        @Inject(USER_TOKEN) private _userToken: BehaviorSubject<any>,
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

    public createUser(user: IEmployee): void {
        user.isAuth = true;
        this._userToken.next(user);
    }

}

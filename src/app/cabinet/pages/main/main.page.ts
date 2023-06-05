import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./styles/main.page.scss']
})
export class MainPageComponent {

    public title: string = this._userService.user.name + ' ' + this._userService.user.surname;

    constructor(private _userService: UserService) {

    }
}

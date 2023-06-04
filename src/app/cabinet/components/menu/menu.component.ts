import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employess.interface';
import { UserService } from 'src/app/services/user.service';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./styles/menu.component.scss']
})

export class MenuComponent {
    public currentUser!: IEmployee;
    public onFocus: boolean = false;

    constructor(private _user: UserService, private _route: Router) {
        this.currentUser = _user.user;
    }

    public exit(): void {
        this._route.navigate(['/login']);
    }
}

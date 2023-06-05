import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employess.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';
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
    public isAdmin: boolean | undefined = this._user.user.isAdmin;

    constructor(private _user: UserService, private _route: Router, private _storage: LocalStorageService) {
        this.currentUser = _user.user;
    }

    public exit(): void {
        this._storage.removeItem('user');
        this._route.navigate(['/login']);
    }
}

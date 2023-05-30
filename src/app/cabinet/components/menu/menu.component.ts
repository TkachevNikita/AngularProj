import { Component } from '@angular/core';
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
    constructor(private _user: UserService) {
        this.currentUser = _user.user;
    }

}

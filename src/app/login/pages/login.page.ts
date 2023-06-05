import { Component,  } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';

@Component({
    templateUrl: 'login.page.html',
    styleUrls: ['./styles/login.page.scss']
})
export class LoginPageComponent {
    public isEmployeeRole: boolean = true;
    public isAdminRole: boolean = false;

    public switchRole(): void {
        this.isEmployeeRole = !this.isEmployeeRole;
        this.isAdminRole = !this.isAdminRole;
    }

}

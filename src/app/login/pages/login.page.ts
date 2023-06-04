import { Component,  } from '@angular/core';

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

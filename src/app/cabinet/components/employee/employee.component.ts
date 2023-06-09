import { Component, Input } from '@angular/core';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';
import { ModalService } from 'src/app/libs/modal-service/modal.service';
import { take } from 'rxjs';
import { EmployeeModalComponent } from '../modals/employee-modal/employee-modal.component';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./styles/employee.component.scss']
})

export class EmployeeComponent {
    @Input() public employee!: EmployeeModel;
    public isAdmin: boolean | undefined = this._userService.user.isAdmin;
    constructor(private _modalService: ModalService, private _userService: UserService) {}

    public onCreateModal(): void {
        const modalRef = this._modalService.open(EmployeeModalComponent,
            { title: this.employee.name + ' ' + this.employee.surname, currentEmployee: this.employee });

        modalRef.onResult()
            .pipe(
                take(1)
            );
    }
}

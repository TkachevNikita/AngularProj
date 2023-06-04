import { Component, Input } from '@angular/core';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';
import { ModalService } from 'src/app/libs/modal-service/modal.service';
import { take } from 'rxjs';
import { EmployeeModalComponent } from '../modals/employee-modal/employee-modal.component';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./styles/employee.component.scss']
})

export class EmployeeComponent {
    @Input() public employee!: EmployeeModel;

    constructor(private _modalService: ModalService) {}

    public onCreateModal(): void {
        const modalRef = this._modalService.open(EmployeeModalComponent,
            { title: this.employee.name + ' ' + this.employee.surname, currentEmployee: this.employee });

        modalRef.onResult()
            .pipe(
                take(1)
            )
            .subscribe(
                closed => console.log('closed', closed),
                dismissed => console.log('dismissed', dismissed),
                () => console.log('completed')
            );
    }
}

import { Component } from '@angular/core';
import { Modal } from '../../../../libs/modal-service/models/modal.model';
import { ModalRef } from 'src/app/libs/modal-service/models/modal-ref.model';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    templateUrl: './new-employee-modal.component.html',
    styleUrls: ['../styles/modal.component.scss']
})
export class NewEmployeeModalComponent extends Modal {
    public override modalInstance!: ModalRef;
    public title!: string;

    constructor(private _storage: LocalStorageService, private _employeeService: EmployeeService) {
        super();
    }

    public onInjectInputs(inputs: any): void {
        this.title = inputs.title;
    }

    public save(): void {
        this.close('saving');
    }

    public cancel(): void {
        this.dismiss('canceling');
    }

}

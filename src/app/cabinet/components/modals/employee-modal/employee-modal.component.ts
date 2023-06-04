import { Component } from '@angular/core';
import { Modal } from '../../../../libs/modal-service/models/modal.model';
import { ModalRef } from 'src/app/libs/modal-service/models/modal-ref.model';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';

@Component({
    templateUrl: './employee-modal.component.html',
    styleUrls: ['../styles/modal.component.scss']
})
export class EmployeeModalComponent extends Modal {

    public override modalInstance!: ModalRef;

    public title!: string;
    public currentEmployee!: EmployeeModel;

    public onInjectInputs(inputs: any): void {
        this.title = inputs.title;
        this.currentEmployee = inputs.currentEmployee;
    }

    public save(): void {
        this.close('saving');
    }

    public cancel(): void {
        this.dismiss('canceling');
    }

}

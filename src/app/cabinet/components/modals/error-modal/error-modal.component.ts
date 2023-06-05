import { Component } from '@angular/core';
import { Modal } from '../../../../libs/modal-service/models/modal.model';
import { ModalRef } from 'src/app/libs/modal-service/models/modal-ref.model';
import { CalendarEvent } from 'angular-calendar';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';


@Component({
    templateUrl: './error-modal.component.html',
    styleUrls: ['./styles/error-modal.component.scss', '../styles/modal.component.scss']
})
export class ErrorModalComponent extends Modal {

    public override modalInstance!: ModalRef;

    public title!: string;
    public errorMessage!: string;

    public onInjectInputs(inputs: any): void {
        this.title = inputs.title;
        this.errorMessage = inputs.errorMessage;
    }

    public save(): void {
        this.close('saving');
    }

    public cancel(): void {
        this.dismiss('canceling');
    }

}

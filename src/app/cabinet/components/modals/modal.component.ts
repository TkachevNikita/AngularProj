import { Component } from '@angular/core';
import { Modal } from '../../../libs/modal-service/models/modal.model';
import { ModalRef } from 'src/app/libs/modal-service/models/modal-ref.model';
import { CalendarEvent } from 'angular-calendar';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';


@Component({
    templateUrl: './modal.component.html',
    styleUrls: ['./styles/modal.component.scss']
})
export class ModalComponent extends Modal {

    public override modalInstance!: ModalRef;

    public title!: string;
    public message!: string;
    public members!: EmployeeModel[];

    public onInjectInputs(inputs: any): void {
        this.title = inputs.title;
        this.message = inputs.message;
        this.members = inputs.members;
    }

    public save(): void {
        this.close('saving');
    }

    public cancel(): void {
        this.dismiss('canceling');
    }

}

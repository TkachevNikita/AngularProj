import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';

@Component({
    selector: 'app-employee-form',
    templateUrl: 'employee-form.component.html',
    styleUrls: ['./styles/employee-form.component.scss']
})
export class EmployeeFormComponent {
    @Input() public currentEmployee!: EmployeeModel;
    @Output() public destroyModal = new EventEmitter<void>();
    public employeeForm: FormGroup;

    constructor(private _storage: LocalStorageService) {
        this.employeeForm = new FormGroup({
            limit: new FormControl()
        });
    }

    public destroy(): void {
        this.destroyModal.emit();
    }

    public onSubmit(): void {
        const sendValue = { 'eventsLimit': this.employeeForm.controls['limit'].value };
        this._storage.setItem((this.currentEmployee.id).toString(), JSON.stringify(sendValue));
        this.destroy();
    }
}

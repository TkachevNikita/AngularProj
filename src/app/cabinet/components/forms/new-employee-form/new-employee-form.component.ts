import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-new-employee-form',
    templateUrl: 'new-employee-form.component.html',
    styleUrls: ['./styles/new-employee-form.component.scss'],
})
export class NewEmployeeFormComponent {
    public newEmployeeForm: FormGroup;
    @Output() public closeModal = new EventEmitter<void>();

    constructor(private _storage: LocalStorageService) {
        this.newEmployeeForm = new FormGroup({
            name: new FormControl('', Validators.required),
            surname: new FormControl('', Validators.required),
            profession: new FormControl('', Validators.required),
            salary: new FormControl('', Validators.required),
            department: new FormControl('', Validators.required),
            age: new FormControl('', Validators.required)
        });
    }

    public closePopup(): void {
        this.closeModal.emit();
    }

    public onSubmit(): void {
        const newEmployee = this.newEmployeeForm.value;
        newEmployee.salary = Number(newEmployee.salary);
        newEmployee.id = 6;
        newEmployee.eventLimit = 5;
        console.log(this.newEmployeeForm.value);

        if (!this._storage.getItem('newEmployees')) {
            this._storage.setItem('newEmployees', JSON.stringify([newEmployee]));
        } else {
            const mergedEmployees = [...this._storage.getItem('newEmployees'), ...[newEmployee]];
            this._storage.setItem('newEmployees', JSON.stringify(mergedEmployees));
        }

        this.closePopup();
    }
}

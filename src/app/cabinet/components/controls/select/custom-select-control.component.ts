/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';

@Component({
    selector: 'app-select',
    templateUrl: './custom-select-control.component.html',
    styleUrls: ['./styles/custom-select-control.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ]
})

export class SelectComponent implements ControlValueAccessor {
    public dropDownIsOpen: boolean = false;
    public employees!: EmployeeModel[];
    public currentOption: string = '';
    public selectedList: EmployeeModel[] = [];
    public selectedItem!: EmployeeModel;

    @Input() public multiple!: boolean;
    public value!: string;
    private _onTouched!: () => void;
    private _onChange!: (value: EmployeeModel[] | EmployeeModel) => void;

    constructor(private _employeeService: EmployeeService) {
        _employeeService.getEmployees().subscribe(employees => {
            this.employees = employees;
        });
    }

    public writeValue(value: any): void {
        this.value = value;
    }
    public registerOnChange(fn: any): void {
        this._onChange = fn;
    }
    public registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    public drawValue(): string {
        if (this.multiple) {
            this.currentOption = this.selectedList.map(option => option.name + ' ' + option.surname).join(', ');
        } else if (this.selectedItem) {
            this.currentOption = this.selectedItem?.name + ' ' + this.selectedItem?.surname;
        }

        return this.currentOption;
    }

    public onOpenSelect(): void {
        switch (this.dropDownIsOpen) {
            case true:
                this.dropDownIsOpen = false;
                break;
            case false:
                this.dropDownIsOpen = true;
                break;
        }
        this._onTouched();
    }

    public onMultipleSelect(employee: EmployeeModel): void {
        if (this.selectedList.includes(employee)) {
            this.selectedList.splice(this.selectedList.indexOf(employee), 1);

            return;
        }
        this.selectedList.push(employee);
        const current = this.selectedList;
        this._onChange(current);
    }

    public onSelect(employee: EmployeeModel): void {
        if (this.multiple) {
            this.onMultipleSelect(employee);
        } else {
            this.onSingleSelect(employee);
        }
    }

    public onSingleSelect(employee: EmployeeModel): void {
        if (this.selectedItem !== undefined) {
            this.selectedItem = employee;
            this._onChange(employee);

            return;
        }
        this.selectedItem = employee;
        this._onChange(employee);
    }
}

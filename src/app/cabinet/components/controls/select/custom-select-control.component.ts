/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, forwardRef } from '@angular/core';
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
  public currentOption!: string;
  public selectedList: string[] = [];

  public value!: string;
  private onTouched!: () => void;
  private onChange!: (value: string[]) => void;


  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public onOpenSelect() {
    switch(this.dropDownIsOpen) {
      case true:
        this.dropDownIsOpen = false;
        break;
      case false:
        this.dropDownIsOpen = true;
        break;
    }
    this.onTouched();
  }

  public onSelect(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    if (this.selectedList.includes(element.innerHTML)) {
      this.selectedList.splice(this.selectedList.indexOf(element.innerHTML), 1)
      return
    }
    this.currentOption = element.innerHTML;
    this.selectedList.push(this.currentOption);
    const current = this.selectedList
    this.onChange(current);
  }

  constructor(private employeeService: EmployeeService) {
     employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }
}

import { Component, Input } from '@angular/core';
import { Employee, data } from 'src/app/view-models/employee/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./styles/employee.component.scss']
})

export class EmployeeComponent {
  @Input() employee: Employee;
  constructor() {
    this.employee = data[0]
  }
}

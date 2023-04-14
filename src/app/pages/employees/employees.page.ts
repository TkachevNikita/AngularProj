import { Component } from '@angular/core';
import { Employee, data } from 'src/app/view-models/employee/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./styles/employees.page.scss']
})

export class EmployeesPageComponent {
  employees: Employee[] = data;
}

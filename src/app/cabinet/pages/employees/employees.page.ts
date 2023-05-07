import { Component } from '@angular/core';
import { Departments } from 'src/app/enums/department.enums';
import { Professions } from 'src/app/enums/profession.enums';
import { IEmployee } from 'src/app/interfaces/employess.interface';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  providers: [EmployeeService],
  styleUrls: ['./styles/employees.page.scss']
})

export class EmployeesPageComponent {
  data: IEmployee = {
    name: '',
    surname: '',
    age: 0,
    profession: Professions.programmer,
    salary: 0,
    department: Departments.first
  }
  public employees: EmployeeModel[] = [new EmployeeModel(this.data)]

  constructor(private employeeService: EmployeeService) {
    employeeService.getEmployees().subscribe(
      employeeList => this.employees = employeeList)

  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  public employees$!: Observable<EmployeeModel[]>;

  constructor(private employeeService: EmployeeService) {
    this.employees$ = employeeService.getEmployees();
  }

}

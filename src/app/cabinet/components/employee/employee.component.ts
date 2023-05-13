import { Component, Input } from '@angular/core';
import { Departments } from 'src/app/enums/department.enums';
import { Professions } from 'src/app/enums/profession.enums';
import { IEmployee } from 'src/app/interfaces/employess.interface';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./styles/employee.component.scss']
})

export class EmployeeComponent {
  @Input() employee!: EmployeeModel;
}

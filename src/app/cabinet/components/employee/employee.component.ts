import { Component, Input } from '@angular/core';
import { Professions } from 'src/app/enums/profession.enums';
import { IEmployee } from 'src/app/interfaces/employess.interface';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./styles/employee.component.scss']
})

export class EmployeeComponent {
  data: IEmployee = {
    name: '',
    surname: '',
    age: 0,
    profession: Professions.programmer,
    salary: 0
  }

  @Input() employee: EmployeeModel;
  constructor() {
    this.employee = new EmployeeModel(this.data);
  }
}

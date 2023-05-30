import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    public employeesData!: EmployeeModel[];

    constructor(private _employeeService: EmployeeService) {
        this.employees$ = _employeeService.getEmployees();
        this.employees$.subscribe((data) => this.employeesData = data);
    }

    public sortByName(): void {
        this.employeesData.sort((a: EmployeeModel, b: EmployeeModel) => {
            if (a.name > b.name) {
                return 1;
            }
            else if (a.name < b.name) {
                return -1;
            }

            return 0;
        });
        this.employees$ = of(this.employeesData);
    }

    public sortByDepartment(): void {
        this.employeesData.sort((a: EmployeeModel, b: EmployeeModel) => {
            if (a.department! > b.department!) {
                return 1;
            }
            else if (a.department! < b.department!) {
                return -1;
            }

            return 0;
        });
        this.employees$ = of(this.employeesData);
    }

    public sortByProfession(): void {
        this.employeesData.sort((a: EmployeeModel, b: EmployeeModel) => {
            if (a.profession! > b.profession!) {
                return 1;
            }
            else if (a.profession! < b.profession!) {
                return -1;
            }

            return 0;
        });
        this.employees$ = of(this.employeesData);
    }

    public selectChanged(value: string): void {
        console.log(value);
    }
}

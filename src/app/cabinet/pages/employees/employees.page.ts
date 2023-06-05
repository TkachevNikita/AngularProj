import { Component } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { ModalService } from 'src/app/libs/modal-service/modal.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';
import { NewEmployeeModalComponent } from '../../components/modals/new-employee-modal/new-employee-modal.component';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.page.html',
    providers: [EmployeeService],
    styleUrls: ['./styles/employees.page.scss']
})

export class EmployeesPageComponent {

    public employees$!: Observable<EmployeeModel[]>;
    public newEmployees$!: Observable<EmployeeModel[]>;
    public employeesData!: EmployeeModel[];
    public isAdmin: boolean | undefined = this._user.user.isAdmin;

    constructor
    (
      private _employeeService: EmployeeService,
      private _user: UserService,
      private _modalService: ModalService
    ) {
        this.employees$ = this._employeeService.getEmployees();
        this.employees$.subscribe((data) => this.employeesData = data);
    }

    public onCreateModal(): void {
        const modalRef = this._modalService.open(NewEmployeeModalComponent,
            { title: 'Добавление сотрудника' });

        modalRef.onResult()
            .pipe(
                take(1)
            );
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

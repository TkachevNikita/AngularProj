import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of, take, tap } from 'rxjs';
import { ModalService } from 'src/app/libs/modal-service/modal.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';
import { NewEmployeeModalComponent } from '../../components/modals/new-employee-modal/new-employee-modal.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { EmployeesKey } from 'src/app/enums/employees.enums';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.page.html',
    styleUrls: ['./styles/employees.page.scss']
})
export class EmployeesPageComponent {

    public employees$: BehaviorSubject<EmployeeModel[]> = new BehaviorSubject<EmployeeModel[]>([]);
    public newEmployees$!: Observable<EmployeeModel[]>;
    public isAdmin: boolean | undefined = this._user.user.isAdmin;

    constructor(
        private _employeeService: EmployeeService,
        private _user: UserService,
        private _modalService: ModalService,
        private _storage: LocalStorageService
    ) {
        this._employeeService.getEmployees()
            .pipe(
                tap((value: EmployeeModel[]) => {
                    this._storage.setItem(EmployeesKey.employees, JSON.stringify(value));
                })
            )
            .subscribe({
                next: (value: EmployeeModel[]) => {
                    this.employees$.next(value);
                }
            });

        this._employeeService.employee$
            .subscribe({
                next: () => {
                    this.employees$.next(this._storage.getItem(EmployeesKey.employees));
                }
            });
    }

    public onCreateModal(): void {
        const modalRef = this._modalService.open(NewEmployeeModalComponent,
            { title: 'Добавление сотрудника' });

        modalRef.onResult()
            .pipe(
                take(1)
            )
            .subscribe({
                next: (value) => console.log(value)
            });


    }

    public sortByName(employeesData: EmployeeModel[]): void {

        employeesData.sort((a: EmployeeModel, b: EmployeeModel) => {
            if (a.name > b.name) {
                return 1;
            }
            else if (a.name < b.name) {
                return -1;
            }

            return 0;
        });
        this.employees$.next(employeesData);
    }

    public sortByDepartment(employeesData: EmployeeModel[]): void {

        employeesData.sort((a: EmployeeModel, b: EmployeeModel) => {
            if (a.department! > b.department!) {
                return 1;
            }
            else if (a.department! < b.department!) {
                return -1;
            }

            return 0;
        });

        this.employees$.next(employeesData);
    }

    public sortByProfession(employeesData: EmployeeModel[]): void {
        employeesData.sort((a: EmployeeModel, b: EmployeeModel) => {
            if (a.profession! > b.profession!) {
                return 1;
            }
            else if (a.profession! < b.profession!) {
                return -1;
            }

            return 0;
        });
        this.employees$.next(employeesData);
    }

}

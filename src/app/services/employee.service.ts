import { Injectable } from '@angular/core';
import { EmployeeModel } from '../view-models/employee/employee.model';
import { IEmployee } from '../interfaces/employess.interface';
import { Observable, Subject, map, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { EmployeesKey } from '../enums/employees.enums';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {

    public employee$: Subject<void> = new Subject<void>();
    constructor(private _storage: LocalStorageService) {}
    /**
     * Получение сотрудников
     * @return Observable<EmployeeModel[]>
     */
    public getEmployees(): Observable<EmployeeModel[]> {

        return this.requestEmployee()
            .pipe(
                map((data: IEmployee[]) => data.map((employee: IEmployee) => new EmployeeModel(employee)))
            );
    }

    /**
     * Получение сотрудников из Storage
     * @returns Observable<IEmployee[]>
     */
    private requestEmployee(): Observable<IEmployee[]> {

        const employeeList: IEmployee[] = [
            {
                age: 24,
                name: 'Oleg',
                surname: 'Chikev',
                salary: 3000,
                profession: 'programmer',
                department: 'department 1',
                id: 0,
                eventLimit: 5
            },
            {
                age: 36,
                name: 'Ivan',
                surname: 'Samoylov',
                salary: 4000,
                profession: 'programmer',
                department: 'department 2',
                id: 1,
                eventLimit: 5
            },
            {
                age: 26,
                name: 'Grisha',
                surname: 'Petrov',
                salary: 3000,
                profession: 'programmer',
                department: 'department 2',
                id: 2,
                eventLimit: 5
            },
            {
                age: 27,
                name: 'Nikita',
                surname: 'Batuev',
                salary: 1700,
                profession: 'manager',
                department: 'department 3',
                id: 3,
                eventLimit: 5
            },
            {
                age: 37,
                name: 'Artem',
                surname: 'Nikolsk',
                salary: 7000,
                profession: 'programmer',
                department: 'department 1',
                id: 4,
                eventLimit: 5
            }
        ];

        if (this._storage.getItem(EmployeesKey.employees)) {
            const newEmployeeList: IEmployee[] = this._storage.getItem(EmployeesKey.employees);

            return of(newEmployeeList);
        }

        return of(employeeList);
    }

}

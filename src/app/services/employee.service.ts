import { Injectable } from '@angular/core';
import { EmployeeModel } from '../view-models/employee/employee.model';
import { Professions } from '../enums/profession.enums';
import { IEmployee } from '../interfaces/employess.interface';
import { Observable, catchError, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  /**
   * Получение сотрудников
   * @return Observable<EmployeeModel[]>
   */
  public getEmployees(): Observable<EmployeeModel[]> {

    return this.requestEmployee()
      .pipe(
        delay(1500),
        map((data: IEmployee[]) => data.map((employee: IEmployee) => new EmployeeModel(employee)))
      );
  }

  private requestEmployee(): Observable<IEmployee[]> {

    const employeeList: IEmployee[] = [
      {
        age: 24,
        name: 'Oleg',
        surname: 'Chikev',
        salary: 3000,
        profession: 'programmer'
      },
      {
        age: 36,
        name: 'Ivan',
        surname: 'Samoylov',
        salary: 4000,
        profession: 'programmer'
      },
      {
        age: 26,
        name: 'Grisha',
        surname: 'Petrov',
        salary: 3000,
        profession: 'programmer'
      },
      {
        age: 27,
        name: 'Nikita',
        surname: 'Batuev',
        salary: 1700,
        profession: 'manager'
      },
      {
        age: 37,
        name: 'Artem',
        surname: 'Nikolsk',
        salary: 7000,
        profession: 'programmer'
      }
    ];

    return of(employeeList);
  }

}
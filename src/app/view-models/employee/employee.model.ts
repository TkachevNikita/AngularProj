import { IEmployee } from 'src/app/interfaces/employess.interface';
import { Professions } from '../../enums/profession.enums';
import { Departments } from 'src/app/enums/department.enums';

export class EmployeeModel {

    public readonly name: string;
    public readonly age: number;
    public readonly surname: string;
    public readonly salary: number;
    public readonly profession: Professions | undefined;
    public readonly department: Departments | undefined;
    public readonly id: number;
    public readonly eventLimit: number;

    constructor(data: IEmployee) {
        this.age = data.age;
        this.surname = data.surname;
        this.profession = this.getProfession(data.profession);
        this.name = data.name;
        this.salary = data.salary;
        this.department = this.getDepartment(data.department);
        this.id = data.id;
        this.eventLimit = data.eventLimit;
    }

    /**
     * Вернуть профессию
     */
    public getProfession(key: string): Professions | undefined {
        switch (key) {
            case 'programmer':
                return Professions.programmer;
            case 'manager':
                return Professions.manager;
            case 'analyst':
                return Professions.analyst;
            case 'qaengineer':
                return Professions.qaengineer;
            default:
                return Professions.analyst;
        }
    }

    public getDepartment(key: string): Departments | undefined {
        switch (key) {
            case 'department 1':
                return Departments.first;
            case 'department 2':
                return Departments.second;
            case 'department 3':
                return Departments.third;
            default:
                return Departments.first;
        }
    }

}

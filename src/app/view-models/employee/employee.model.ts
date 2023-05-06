import { IEmployee } from 'src/app/interfaces/employess.interface';
import { Professions } from '../../enums/profession.enums';

export class EmployeeModel {

  public readonly name: string;
  public readonly age: number;
  public readonly surname: string;
  public readonly salary: number;
  public readonly profession: Professions | undefined;

  constructor(data: IEmployee) {
    this.age = data.age;
    this.surname = data.surname;
    this.profession = this.getProfession(data.profession);
    this.name = data.name;
    this.salary = data.salary;
  }

  /**
   * Вернуть профессию
   */
  public getProfession(key: string): Professions | undefined {
    switch (key) {
      case 'programmer':
        return Professions.programmer
        break;
      case 'manager':
        return Professions.manager
        break;
      case 'analyst':
        return Professions.analyst
        break;
      case 'qaengineer':
        return Professions.qaengineer
        break;
      default:
        return Professions.analyst;
        break;
    }
  }

}

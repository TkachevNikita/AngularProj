import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/employess.interface';

@Injectable()
export class UserService {
    private _user!: IEmployee;

    public get user(): IEmployee {
        return this._user;
    }

    public set user(user: IEmployee) {
        this._user = user;
    }
}

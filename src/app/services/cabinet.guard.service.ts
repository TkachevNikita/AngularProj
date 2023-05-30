import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { IEmployee } from '../interfaces/employess.interface';
import { USER_TOKEN } from '../tokens/user.token';
import { UserService } from './user.service';

@Injectable()
export class CabinetGuardService implements CanActivate {

    constructor(
        private _router: Router,
        @Inject(USER_TOKEN) private _userToken: BehaviorSubject<any>,
        private _userService: UserService
    ) {

    }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // return this.permissions.canActivate(this.currentUser, route.params.id);
        if (this._userService.user?.isAuth) {

            return of(true);
        }

        return this._router.navigate(['/login']);
    }
}

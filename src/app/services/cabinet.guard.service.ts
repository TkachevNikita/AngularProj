import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { IEmployee } from '../interfaces/employess.interface';
import { USER_TOKEN } from '../tokens/user.token';
import { UserService } from './user.service';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class CabinetGuardService implements CanActivate {

    constructor(
        private _router: Router,
        @Inject(USER_TOKEN) private _userToken: BehaviorSubject<any>,
        private _userService: UserService,
        private _storage: LocalStorageService
    ) {

    }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // return this.permissions.canActivate(this.currentUser, route.params.id);
        if (this._storage.getItem('user')) {
            this._userService.user = this._storage.getItem('user');

            return of(true);
        }

        return this._router.navigate(['/login']);
    }
}

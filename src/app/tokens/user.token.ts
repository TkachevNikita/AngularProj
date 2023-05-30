import { InjectionToken } from '@angular/core';
import { IEmployee } from '../interfaces/employess.interface';
import { BehaviorSubject } from 'rxjs';

export const USER_TOKEN: InjectionToken<BehaviorSubject<any>> = new InjectionToken<BehaviorSubject<any>>('user token');

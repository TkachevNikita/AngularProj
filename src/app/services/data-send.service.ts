import { Injectable } from '@angular/core';
import { CalendarViewModel } from '../view-models/calendar.view-model';
import { Subject } from 'rxjs';

@Injectable()
export class DataSendService {
    private _calendarViewModelSource = new Subject<CalendarViewModel>();
    private _calendarViewModel$ = this._calendarViewModelSource.asObservable();

    public sendCalendarViewModel(calendarViewModel: CalendarViewModel): void {
        this._calendarViewModelSource.next(calendarViewModel);
    }
}

import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { EventsKey } from 'src/app/enums/events-key.enum';
import { LocalStorageManagerService } from 'src/app/services/local-storage-manager.service';
import { UserService } from 'src/app/services/user.service';
import { CalendarViewModel } from 'src/app/view-models/calendar.view-model';

@Component({
    selector: 'app-self-calendar-page',
    templateUrl: './self-calendar.page.html',
    styleUrls: ['./styles/self-calendar.page.scss']
})
export class SelfCalendarPageComponent {
    public model!: CalendarViewModel;

    constructor(private _storageManager: LocalStorageManagerService, private _userService: UserService) {
        this.init();
    }

    public init(): void {
        this.model = new CalendarViewModel([]);
        this.model.id = EventsKey.selfMeetingRooms;
        this._storageManager.setSelfEvents(EventsKey.selfMeetingRooms);
    }
}

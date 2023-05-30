import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsKey } from 'src/app/enums/events-key.enum';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RoomService } from 'src/app/services/rooms.service';
import { CalendarViewModel } from 'src/app/view-models/calendar.view-model';
import { RoomModel } from 'src/app/view-models/room/room.model';
import { EventColor } from 'calendar-utils';

@Component({
    templateUrl: 'rooms-calendar.component.html'
})

export class RoomsCalendarComponent {
    public model!: CalendarViewModel;
    public choiceIsClose: boolean = false;
    public rooms$!: Observable<RoomModel[]>;
    public roomsData!: RoomModel[];
    public colors: Record<string, EventColor> = {
        red: {
            primary: '#ad2121',
            secondary: '#FAE3E3',
        },
        blue: {
            primary: '#1e90ff',
            secondary: '#D1E8FF',
        },
        yellow: {
            primary: '#e3bc08',
            secondary: '#FDF1BA',
        },
        purple: {
            primary: '#8c19c2',
            secondary: '#b554e3',
        },
        black: {
            primary: '#0e0d0f',
            secondary: '#7d7a80'
        }
    };

    constructor
    ( private _router: Router,
      private _storage: LocalStorageService,
      private _roomSerivce: RoomService,
      private _route: ActivatedRoute
    ) {
        this.rooms$ = _roomSerivce.getRooms();
        this.rooms$.subscribe(data => this.roomsData = data);
        this.init();
    }

    public setEventColor(id: EventsKey): void {
        switch(id) {
            case EventsKey.meetingRoom1:
                this.model.color = this.colors['red'];
                break;
            case EventsKey.meetingRoom2:
                this.model.color = this.colors['blue'];
                break;
            case EventsKey.meetingRoom3:
                this.model.color = this.colors['yellow'];
                break;
            case EventsKey.meetingRoom4:
                this.model.color = this.colors['purple'];
                break;
            case EventsKey.meetingRoom5:
                this.model.color = this.colors['black'];
                break;
        }
    }

    public init(): void {

        this._route.params.subscribe((params: Params) => {
            this.model = new CalendarViewModel([]);
            this.model.id = params['id'];
        });
    }
}

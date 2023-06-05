import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { EventsKey } from 'src/app/enums/events-key.enum';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RoomService } from 'src/app/services/rooms.service';
import { CalendarViewModel } from 'src/app/view-models/calendar.view-model';
import { RoomModel } from 'src/app/view-models/room/room.model';
import { EventColor } from 'calendar-utils';

@Component({
    templateUrl: 'rooms-calendar.component.html'
})

export class RoomsCalendarComponent implements OnDestroy {
    public model!: CalendarViewModel;
    public choiceIsClose: boolean = false;
    public rooms$!: Observable<RoomModel[]>;
    public roomsData!: RoomModel[];
    private _paramsSubscription$: Subject<void> = new Subject<void>();

    private _colors: Record<string, EventColor> = {
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
        this.rooms$
            .pipe(
                takeUntil(this._paramsSubscription$)
            )
            .subscribe(data => this.roomsData = data);
        this.init();
    }

    /**
     * Устанавливает цвет ивента
     * @param id - ID переговорки
     */
    public setEventColor(id: EventsKey): void {
        switch(id) {
            case EventsKey.meetingRoom1:
                this.model.color = this._colors['red'];
                break;
            case EventsKey.meetingRoom2:
                this.model.color = this._colors['blue'];
                break;
            case EventsKey.meetingRoom3:
                this.model.color = this._colors['yellow'];
                break;
            case EventsKey.meetingRoom4:
                this.model.color = this._colors['purple'];
                break;
            case EventsKey.meetingRoom5:
                this.model.color = this._colors['black'];
                break;
        }
    }

    /**
     * Инициализация переговорки
     */
    public init(): void {

        this._route.params
            .pipe(
                takeUntil(this._paramsSubscription$)
            )
            .subscribe((params: Params) => {
                this.model = new CalendarViewModel([]);
                this.model.isMeetingRoom = true;
                this.model.id = params['id'];
                this.setEventColor(this.model.id);
            });
    }

    public ngOnDestroy(): void {
        this._paramsSubscription$?.next();
        this._paramsSubscription$?.complete();
    }
}

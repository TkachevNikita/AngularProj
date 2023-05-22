import { CalendarEvent, CalendarView } from 'angular-calendar';
import { BehaviorSubject } from 'rxjs';
import { EventsKey } from '../enums/events-key.enum';
import { EventColor } from 'calendar-utils';

export class CalendarViewModel {


    /** Текущий день */
    public currentDay!: Date;
    public view: CalendarView;
    public viewDate!: Date;
    public events$!: BehaviorSubject<CalendarEvent<any>[]>;
    public activeDayIsOpen: boolean;
    public dayIsClicked: boolean;
    public currentTitle!: string;
    public currentMembers!: string[];
    public modalIsOpen: boolean;
    public eventDialogIsOpen: boolean;
    public id!: EventsKey;
    public color!: EventColor;

    constructor(events: CalendarEvent<any>[] | []) {
        this.view = CalendarView.Month;
        this.viewDate = new Date();
        this.events$ = new BehaviorSubject<CalendarEvent<any>[]>(events);
        this.activeDayIsOpen = false;
        this.dayIsClicked = false;
        this.modalIsOpen = false;
        this.eventDialogIsOpen = false;
        this.id = EventsKey.allMeetingRooms;
    }

}

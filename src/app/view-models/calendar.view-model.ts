import { CalendarEvent, CalendarView } from 'angular-calendar';
import { BehaviorSubject } from 'rxjs';
import { EventsKey } from '../enums/events-key.enum';
import { EventColor } from 'calendar-utils';

export class CalendarViewModel {


    /** Текущий день */
    public currentDay!: Date;
    public view: CalendarView;
    public calendarView;
    public viewDate!: Date;
    public events$!: BehaviorSubject<CalendarEvent[]>;
    public activeDayIsOpen: boolean;
    public dayIsClicked: boolean;
    public currentTitle!: string;
    public currentMembers!: string[];
    public modalIsOpen: boolean;
    public eventDialogIsOpen: boolean;
    public id!: EventsKey;
    public color!: EventColor;
    public isMeetingRoom!: boolean;

    constructor(events: CalendarEvent[] | []) {
        this.calendarView = CalendarView;
        this.view = CalendarView.Month;
        this.viewDate = new Date();
        this.events$ = new BehaviorSubject<CalendarEvent[]>(events);
        this.activeDayIsOpen = false;
        this.dayIsClicked = false;
        this.modalIsOpen = false;
        this.eventDialogIsOpen = false;
        this.id = EventsKey.allMeetingRooms;
        this.isMeetingRoom = false;
    }

}

/* eslint-disable @angular-eslint/component-selector */
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'src/app/services/local-storage.service';

const colors: Record<string, EventColor> = {
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
};

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LocalStorageService],
  styleUrls: ['styles/custom-calendar.component.scss'],
  templateUrl: 'custom-calendar.component.html',
})
export class DemoComponent implements OnInit {
  public currentDay!: Date;
  public view: CalendarView = CalendarView.Month;
  public CalendarView = CalendarView;
  public viewDate: Date = new Date();
  public events$: BehaviorSubject<CalendarEvent<any>[]> = new BehaviorSubject<CalendarEvent<any>[]>([]);
  public activeDayIsOpen = false;
  public dayIsClicked = false;
  public currentTitle!: string;
  public currentMembers!: string[];
  public modalIsOpen: boolean = false;
  public eventDialogIsOpen: boolean = false;

  constructor(private modal: NgbModal, private storage: LocalStorageService) { }

  public ngOnInit(): void {
    const data = this.storage.getItem('event');
    if (data) {
      this.refactorDate(data);
      this.events$.next(data);
    }
  }

  public refactorDate(data: CalendarEvent[]): void {
    data.forEach((element: CalendarEvent) => {
      element.start = new Date(element.start)
      element.end = new Date(element.end as unknown as string)
   });
  }

  public onSubmit(event: CalendarEvent): void {
    event.start = new Date(this.currentDay);
    this.addEvent(event);
    this.closeModal();
  }

  /**
   * выбор дня
   */
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
      this.currentDay = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    }
    this.dayIsClicked = true;
  }

  addEvent(event: any): void {
    this.events$.next([
      ...this.events$.getValue(),
      {
        title: event.eventTitle,
        start: new Date(event.start),
        end: new Date(event.start),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        members: event.eventMembers
      },
    ]);
    this.storage.setItem('event', JSON.stringify(this.events$.getValue()));
  }

  eventClicked(event: any) {
    this.currentMembers = event.event.members;
    this.currentTitle = event.event.title;
    this.openEventDialog();
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events$.next(this.events$.getValue().filter((event: any) => event !== eventToDelete));
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  public openEventDialog() {
    this.eventDialogIsOpen = true;
  }

  public closeEventDialog() {
    this.eventDialogIsOpen = false;
  }

  public openModal() {
    this.modalIsOpen = true;
  }

  public closeModal() {
    this.modalIsOpen = false;
  }

}

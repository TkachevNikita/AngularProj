/* eslint-disable @angular-eslint/component-selector */
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
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
import { Observable, Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  styleUrls: ['styles/custom-calendar.component.scss'],
  templateUrl: 'custom-calendar.component.html',
})
export class DemoComponent {

  // 1. убрать лишний код
  // 2 .вынести в отдельный компоненты
  public currentDay!: Date;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  events: any = [];
  public activeDayIsOpen = false;

  constructor(private modal: NgbModal) {
    const data = localStorage.getItem('event');
    if (data !== null) {
      const events = JSON.parse(data);
      events.forEach((element: any) => {
        this.addEvent(element);
      });
    }
  }

  public onSubmit(event: CalendarEvent): void {
    event.start = new Date(this.currentDay);
    this.addEvent(event)
    this.closeModal()
    console.log(event);
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
    this.openModal();
  }

  addEvent(event: any): void {
    this.events = [
      ...this.events,
      {
        title: event.eventTitle,
        start: new Date(event.start),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
    localStorage.setItem('event', JSON.stringify(this.events))
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event: any) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  public modalIsOpen = false;

  public openModal() {
    this.modalIsOpen = true;
  }

  public closeModal() {
    this.modalIsOpen = false;
  }

}

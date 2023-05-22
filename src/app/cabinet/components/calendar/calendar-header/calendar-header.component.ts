import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CalendarView } from "angular-calendar";

interface ICalendarView {
  Month: CalendarView.Month,
  Week: CalendarView.Week,
  Day: CalendarView.Day
}

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./styles/calendar-header.component.scss']
})
export class CalendarHeaderComponent {
  @Input() view!: CalendarView;
  @Input() viewDate!: Date;
  @Input() CalendarViewMonth!: CalendarView;
  @Input() CalendarViewWeek!: CalendarView;
  @Input() CalendarViewDay!: CalendarView;
  @Input() CalendarView!: ICalendarView;
  @Output() closeOpenMonth = new EventEmitter<boolean>;
  @Output() setViewMonth = new EventEmitter<CalendarView>
  @Output() setViewWeek = new EventEmitter<CalendarView>
  @Output() setViewDay = new EventEmitter<CalendarView>

  closeOpenMonthView() {
    this.closeOpenMonth.emit()
  }

  monthView(view: CalendarView) {
    this.setViewMonth.emit(view)
  }

  weekView(view: CalendarView) {
    this.setViewWeek.emit(view)
  }

  dayView(view: CalendarView) {
    this.setViewDay.emit(view)
  }

}

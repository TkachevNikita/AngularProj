import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar.page.html',
  styleUrls: ['./styles/calendar.page.scss']
})
export class CalendarPageComponent {
  isDay = false;
  isWeek = true;
}

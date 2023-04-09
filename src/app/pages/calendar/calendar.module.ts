import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {CalendarPageRoutingModule} from './calendar-routing.module'
import { CalendarPageComponent } from "./calendar.page";
import { TableCalendarModule } from "src/app/components/table-calendar/table-calendar.module";
import { DayCalendarComponent } from "src/app/components/table-calendar/day-calendar/day-calendar.component";

@NgModule({
  imports: [
    CommonModule,
    CalendarPageRoutingModule,
    TableCalendarModule
  ],
  declarations: [CalendarPageComponent, DayCalendarComponent]
})

export class CalendarPageModule {

}

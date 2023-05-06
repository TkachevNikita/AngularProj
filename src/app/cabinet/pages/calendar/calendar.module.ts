import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CalendarPageComponent } from "./calendar.page";
import { TableCalendarModule } from "../../components/table-calendar/table-calendar.module";
import { DayCalendarComponent } from "../../components/table-calendar/day-calendar/day-calendar.component";

@NgModule({
  imports: [
    CommonModule,
    // CalendarPageRoutingModule,
    TableCalendarModule
  ],
  declarations: [CalendarPageComponent, DayCalendarComponent]
})

export class CalendarPageModule {

}

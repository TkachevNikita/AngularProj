import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RoomsPageModule } from './pages/rooms/rooms.module';
import { EmployeesPageModule } from './pages/employees/employees.module';
import { CalendarPageModule } from './pages/calendar/calendar.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RoomsPageModule,
    EmployeesPageModule,
    CalendarPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

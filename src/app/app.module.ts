import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RoomsPageModule } from './pages/rooms/rooms.module';
import { EmployeesPageModule } from './pages/employees/employees.module';
import { CalendarPageModule } from './pages/calendar/calendar.module'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rooms',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    RoomsPageModule,
    EmployeesPageModule,
    CalendarPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

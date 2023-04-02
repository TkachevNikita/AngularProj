import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from "./components/menu/menu.component";
import {RoomsComponent} from "./components/rooms/rooms.component";
import {MainPageComponent} from "./components/main/main-page.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {NotFoundComponent} from "./components/notfound/NotFound.component";
import {TableCalendar} from "./components/table-calendar/table-calendar.component";

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RoomsComponent,
    MainPageComponent,
    CalendarComponent,
    NotFoundComponent,
    TableCalendar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

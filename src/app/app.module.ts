import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsPageModule } from './cabinet/pages/rooms/rooms.module';
import { CalendarPageModule } from './cabinet/pages/calendar/calendar.module'
import { CabinetLayoutModule } from './cabinet/cabinet-layout.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoomsPageModule,
    CalendarPageModule,
    CabinetLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

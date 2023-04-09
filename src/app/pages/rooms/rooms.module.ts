import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RoomsPagedRoutingModule } from './rooms-routing.module';
import { RoomsPageComponent } from './rooms.page';
import { TableCalendarModule } from 'src/app/components/table-calendar/table-calendar.module';


@NgModule({
  imports: [
    CommonModule,
    TableCalendarModule,
    RoomsPagedRoutingModule,
  ],
  declarations: [RoomsPageComponent]
})
export class RoomsPageModule { }

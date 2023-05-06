import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsPageComponent } from './rooms.page';
import { TableCalendarModule } from '../../components/table-calendar/table-calendar.module';
import { RoomsPagedRoutingModule } from './rooms-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TableCalendarModule,
    RoomsPagedRoutingModule,
  ],
  declarations: [RoomsPageComponent]
})

export class RoomsPageModule { }

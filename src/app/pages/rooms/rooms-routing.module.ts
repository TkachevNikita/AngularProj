import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from 'src/app/layout/layout.component';
import { RoomsPageComponent } from './rooms.page';
import { TableCalendarComponent } from 'src/app/components/table-calendar/table-calendar.component';

const routes: Routes = [
  {
    path: 'rooms',
    component: MainLayoutComponent,
    children: [
      { path: '', component: RoomsPageComponent },
      { path: ':id', component: TableCalendarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsPagedRoutingModule { }

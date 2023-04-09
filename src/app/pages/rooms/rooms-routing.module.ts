import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from 'src/app/layout/layout.component';
import { RoomsPageComponent } from './rooms.page';

const routes: Routes = [
  {
    path: 'rooms',
    component: MainLayoutComponent,
    children: [
      { path: '', component: RoomsPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsPagedRoutingModule { }

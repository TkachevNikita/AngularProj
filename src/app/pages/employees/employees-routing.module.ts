import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from 'src/app/layout/layout.component';
import { EmployeesPageComponent } from './employees.page';

const routes: Routes = [
  {
    path: 'employees',
    component: MainLayoutComponent,
    children: [
      { path: '', component: EmployeesPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesPageRoutingModule { }

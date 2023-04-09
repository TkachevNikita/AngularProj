import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesPageRoutingModule } from './employees-routing.module';
import { EmployeesPageComponent } from './employees.page';
import { EmployeeComponent } from 'src/app/components/employee/employee.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesPageRoutingModule,
  ],
  declarations: [EmployeesPageComponent, EmployeeComponent]
})
export class EmployeesPageModule { }

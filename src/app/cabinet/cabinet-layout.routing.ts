import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CabinetLayoutComponent } from "./cabinet-layout.component";
import { EmployeesPageComponent } from "../cabinet/pages/employees/employees.page";
import { CalendarPageComponent } from "../cabinet/pages/calendar/calendar.page";
import { RoomsPageComponent } from "../cabinet/pages/rooms/rooms.page";
import { TableCalendarComponent } from "../cabinet/components/table-calendar/table-calendar.component";

const routes: Routes = [
  {
    path: '',
    component: CabinetLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full'
      },
      {
        path: 'employees',
        component: EmployeesPageComponent
      },
      {
        path: 'calendar',
        component: CalendarPageComponent,
      },
      {
        path: 'rooms',
        component: RoomsPageComponent,
        children: [
          { path: ':id', component: TableCalendarComponent }
        ]
      }
    ]
  }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

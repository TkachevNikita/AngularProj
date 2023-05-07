import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CabinetLayoutComponent } from "./cabinet-layout.component";
import { EmployeesPageComponent } from "../cabinet/pages/employees/employees.page";
import { CalendarPageComponent } from "../cabinet/pages/calendar/calendar.page";
import { RoomsPageComponent } from "../cabinet/pages/rooms/rooms.page";
import { TableCalendarComponent } from "../cabinet/components/table-calendar/table-calendar.component";
import { MainPageComponent } from "./pages/main/main.page";
import { NotFoundPage } from "./pages/not-found/not-found.page";

const routes: Routes = [
  {
    path: '',
    component: CabinetLayoutComponent,
    children: [
      {
        path: '',
        component: MainPageComponent,
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
      },
      {
        path: '**',
        component: NotFoundPage
      }
    ]
  }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

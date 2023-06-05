import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetLayoutComponent } from './cabinet-layout.component';
import { EmployeesPageComponent } from '../cabinet/pages/employees/employees.page';
import { RoomsPageComponent } from '../cabinet/pages/rooms/rooms.page';
import { MainPageComponent } from './pages/main/main.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { CustomCalendarComponent } from './components/custom-calendar/components/custom-calendar.component';
import { RoomsCalendarComponent } from './pages/rooms/components/rooms-calendar/rooms-calendar.component';
import { SelfCalendarPageComponent } from './pages/calendar/self-calendar.page';

const routes: Routes = [
    {
        path: '',
        component: CabinetLayoutComponent,
        children: [
            {
                path: '',
                component: CustomCalendarComponent,
                pathMatch: 'full'
            },
            {
                path: 'selfcalendar',
                component: SelfCalendarPageComponent,
            },
            {
                path: 'employees',
                component: EmployeesPageComponent
            },
            {
                path: 'calendar',
                component: CustomCalendarComponent,
            },
            {
                path: 'rooms',
                component: RoomsPageComponent,
            },
            {
                path: 'rooms/:id',
                component: RoomsCalendarComponent
            },
            {
                path: '**',
                component: NotFoundPage
            }
        ]
    }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

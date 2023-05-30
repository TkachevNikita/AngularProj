import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetLayoutComponent } from './cabinet-layout.component';
import { EmployeesPageComponent } from '../cabinet/pages/employees/employees.page';
import { RoomsPageComponent } from '../cabinet/pages/rooms/rooms.page';
import { MainPageComponent } from './pages/main/main.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { DemoComponent } from './pages/custom-calendar/components/custom-calendar.component';
import { RoomsCalendarComponent } from './pages/rooms/components/rooms-calendar/rooms-calendar.component';

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
                component: DemoComponent,
            },
            {
                path: 'rooms',
                component: RoomsPageComponent,
                // children: [
                //     { path: ':id', component: RoomsCalendarComponent }
                // ]
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

import { NgModule } from '@angular/core';
import { CabinetLayoutComponent } from './cabinet-layout.component';
import { routing } from './cabinet-layout.routing';
import { MenuComponent } from '../cabinet/components/menu/menu.component';
import { EmployeeComponent } from '../cabinet/components/employee/employee.component';
import { EmployeesPageComponent } from './pages/employees/employees.page';
import { CommonModule } from '@angular/common';
import { CalendarPageComponent } from './pages/calendar/calendar.page';
import { RoomsPageComponent } from './pages/rooms/rooms.page';
import { MainPageComponent } from './pages/main/main.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DemoModule } from './pages/custom-calendar/custom-calendar.module';
import { RoomsCalendarComponent } from './pages/rooms/components/rooms-calendar/rooms-calendar.component';
import { EmployeeFormComponent } from './components/forms/employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModalComponent } from './components/modals/employee-modal/employee-modal.component';


@NgModule({
    declarations: [
        CabinetLayoutComponent,
        MenuComponent,
        EmployeeComponent,
        EmployeesPageComponent,
        CalendarPageComponent,
        CalendarPageComponent,
        RoomsPageComponent,
        MainPageComponent,
        NotFoundPage,
        RoomsCalendarComponent,
        EmployeeFormComponent,
        EmployeeModalComponent
    ],
    imports: [
        routing,
        CommonModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        DemoModule,
        FormsModule,
        ReactiveFormsModule
    ],
})
export class CabinetLayoutModule {

}

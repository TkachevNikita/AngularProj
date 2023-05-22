import { NgModule } from '@angular/core';
import { CabinetLayoutComponent } from './cabinet-layout.component';
import { routing } from './cabinet-layout.routing';
import { MenuComponent } from '../cabinet/components/menu/menu.component';
import { EmployeeComponent } from '../cabinet/components/employee/employee.component';
import { EmployeesPageComponent } from './pages/employees/employees.page';
import { CommonModule } from '@angular/common';
import { CalendarPageComponent } from './pages/calendar/calendar.page';
import { DayCalendarComponent } from './components/table-calendar/day-calendar/day-calendar.component';
import { TableCalendarModule } from './components/table-calendar/table-calendar.module';
import { RoomsPageComponent } from './pages/rooms/rooms.page';
import { MainPageComponent } from './pages/main/main.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DemoModule } from './pages/custom-calendar/custom-calendar.module';
import { DataSendService } from '../services/data-send.service';


@NgModule({
    declarations: [
        CabinetLayoutComponent,
        MenuComponent,
        EmployeeComponent,
        EmployeesPageComponent,
        CalendarPageComponent,
        CalendarPageComponent,
        DayCalendarComponent,
        RoomsPageComponent,
        MainPageComponent,
        NotFoundPage,
    ],
    imports: [
        routing,
        CommonModule,
        TableCalendarModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        DemoModule,
    ],
    providers: [DataSendService],
})
export class CabinetLayoutModule {

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomCalendarComponent } from './components/custom-calendar.component';
import { FormDialogComponent } from '../../components/dialogs/form-dialog/form-dialog.component';
import { EventFormComponent } from '../../components/forms/event-form/event-form.component';
import { SelectComponent } from '../../components/controls/select/custom-select-control.component';
import { ModalServiceModule } from 'src/app/libs/modal-service/modal.module';
import { AppSelectModule } from '../../components/controls/select/custom-select-control.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModalModule,
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        ReactiveFormsModule,
        ModalServiceModule,
        AppSelectModule
    ],
    declarations: [
        CustomCalendarComponent,
        FormDialogComponent,
        EventFormComponent,
    ],
    exports: [CustomCalendarComponent],
})
export class DemoModule { }

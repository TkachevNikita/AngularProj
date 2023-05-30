import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './components/custom-calendar.component';
import { FormDialogComponent } from '../../components/dialogs/form-dialog/form-dialog.component';
import { FormComponent } from '../../components/form/form.component';
import { SelectComponent } from '../../components/controls/select/custom-select-control.component';
import { EventDialogComponent } from '../../components/dialogs/event-dialog/event-dialog.component';
import { CalendarHeaderComponent } from '../../components/calendar/calendar-header/calendar-header.component';
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
        DemoComponent,
        FormDialogComponent,
        FormComponent,
        EventDialogComponent,
        CalendarHeaderComponent,
    ],
    exports: [DemoComponent],
})
export class DemoModule { }

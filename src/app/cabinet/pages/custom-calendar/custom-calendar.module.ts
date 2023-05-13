import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './custom-calendar.component';
import { FormDialogComponent } from '../../components/dialogs/form-dialog.component';
import { FormComponent } from '../../components/form/form.component';
import { SelectComponent } from '../../components/controls/select/custom-select-control.component';

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
  ],
  declarations: [
    DemoComponent,
    FormDialogComponent,
    FormComponent,
    SelectComponent
  ],
  exports: [DemoComponent],
})
export class DemoModule {}

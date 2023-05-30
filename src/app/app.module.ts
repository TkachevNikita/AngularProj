import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabinetLayoutModule } from './cabinet/cabinet-layout.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalServiceModule } from './libs/modal-service/modal.module';
import { ModalService } from './libs/modal-service/modal.service';
import { LocalStorageService } from './services/local-storage.service';
import { CabinetGuardService } from './services/cabinet.guard.service';
import { USER_TOKEN } from './tokens/user.token';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserService } from './services/user.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModalModule,
        FormsModule,
        ModalServiceModule.forRoot(),
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        ReactiveFormsModule,
        ModalServiceModule,
    ],
    providers: [
        ModalService,
        LocalStorageService,
        CabinetGuardService,
        UserService,
        {
            provide: USER_TOKEN,
            useValue: (): unknown => {
                return new BehaviorSubject<any>({});
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

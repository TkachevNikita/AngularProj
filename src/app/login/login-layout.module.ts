import { NgModule } from '@angular/core';
import { routing } from './login-layout.routing';
import { LoginPageComponent } from './pages/login.page';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './login-layout.component';
import { SelectComponent } from '../cabinet/components/controls/select/custom-select-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppSelectModule } from '../cabinet/components/controls/select/custom-select-control.module';


@NgModule({
    declarations: [
        LoginLayoutComponent,
        LoginPageComponent,

    ],
    imports: [
        routing,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppSelectModule
    ],
})
export class LoginLayoutModule {
}


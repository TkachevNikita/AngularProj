import { NgModule } from '@angular/core';
import { routing } from './login-layout.routing';
import { LoginPageComponent } from './pages/login.page';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './login-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppSelectModule } from '../cabinet/components/controls/select/custom-select-control.module';
import { EmployeeLoginFormComponent } from './components/forms/login-forms/employee-login-form/employee-login-form.component';
import { AdminLoginFormComponent } from './components/forms/login-forms/admin-login-form/admin-login-form.component';


@NgModule({
    declarations: [
        LoginLayoutComponent,
        LoginPageComponent,
        EmployeeLoginFormComponent,
        AdminLoginFormComponent
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


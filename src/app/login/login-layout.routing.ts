import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginPageComponent } from './pages/login.page';

const routes: Routes = [
    {
        path: '',
        component: LoginLayoutComponent,
        children: [
            {
                path: '',
                component: LoginPageComponent,
                pathMatch: 'full'
            }
        ]
    }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

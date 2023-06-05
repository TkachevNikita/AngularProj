import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetGuardService } from './services/cabinet.guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'cabinet',
        pathMatch: 'full',
    },
    {
        path: 'cabinet',
        loadChildren: () => import('./cabinet/cabinet-layout.module').then(m => m.CabinetLayoutModule),
        canActivate: [CabinetGuardService]
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login-layout.module').then(m => m.LoginLayoutModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

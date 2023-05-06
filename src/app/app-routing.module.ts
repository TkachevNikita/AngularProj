import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cabinet',
    pathMatch: 'full',
  },
  {
    path: 'cabinet',
    loadChildren: () => import('./cabinet/cabinet-layout.module').then(m => m.CabinetLayoutModule)
  }
  // {
  //   path: '',
  //   component: MainLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'employees',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'employees',
  //       component: EmployeesPageComponent
  //     },
  //     {
  //       path: 'calendar',
  //       component: CalendarPageComponent,
  //     },
  //     {
  //       path: 'rooms',
  //       component: RoomsPageComponent,
  //       children: [
  //         { path: ':id', component: TableCalendarComponent }
  //       ]
  //     }
  //   ]
  // }
  // {
  //   path: '',
  //   redirectTo: 'employees',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'employees',
  //   component: MainLayoutComponent,
  //   children: [
  //     { path: '', component: EmployeesPageComponent },
  //     {
  //       path: 'calendar',
  //       component: CalendarPageComponent,
  //     },
  //     {
  //       path: 'rooms',
  //       component: RoomsPageComponent,
  //       children: [
  //         { path: ':id', component: TableCalendarComponent }
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// {
//   path: '',
//   component: LayoutAccountWebComponent,
//   children: [
//       {
//           path: '',
//           redirectTo: 'login',
//           pathMatch: 'full'
//       },
//       {
//           path: 'login',
//           component: AccountDashboardWebComponent,
//           children: [
//               {
//                   path: '',
//                   redirectTo: 'offices'
//               },
//               {
//                   path: 'offices',
//                   component: AccountAtmWebComponent
//               },
//               {
//                   path: 'p2p',
//                   component: AccountP2PWebComponent
//               }
//           ]
//       },
//       {
//           path: 'news',
//           loadChildren: () => import('./account-news/account-news.web.module').then(m => m.AccountNewsWebModule)
//       }
//   ]
// },
// {
//   path: 'register',
//   component: AccountRegisterWebComponent,
//   data: { action: 'registration' }
// },
// {
//   path: 'restore-access',
//   component: AccountRegisterWebComponent,
//   data: { action: 'restore-access' }
// },
// {
//   path: 'password-expired',
//   component: LayoutPasswordExpiredWebComponent
// }

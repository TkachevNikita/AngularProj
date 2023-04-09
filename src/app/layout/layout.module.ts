import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout.component';
import { MenuComponent } from '../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [
    MainLayoutComponent,
  ],
  declarations: [
    MainLayoutComponent,
    MenuComponent
  ]
})
export class LayoutModule { }

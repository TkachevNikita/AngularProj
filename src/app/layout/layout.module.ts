import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout.component';

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
  ]
})
export class LayoutModule { }

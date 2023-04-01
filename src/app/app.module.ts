import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from "./components/menu/menu.component";
import {RoomsComponent} from "./components/rooms/rooms.component";
import {MainPageComponent} from "./components/main/main-page.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RoomsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

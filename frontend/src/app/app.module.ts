import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, app_routing_providers } from "./app.routing";

import { AppComponent } from './app.component';
import { PropertyHomeComponent } from './components/property-home/property-home.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyHomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    app_routing_providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

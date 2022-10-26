import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { routing, app_routing_providers } from "./app.routing";

import { AppComponent } from './app.component';
import { PropertyHomeComponent } from './components/property-home/property-home.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { AmenityComponent } from './components/amenity/amenity.component';
import { FinancingComponent } from './components/financing/financing.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { MasterPlanComponent } from './components/master-plan/master-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyHomeComponent,
    HomeComponent,
    LocationComponent,
    AmenityComponent,
    FinancingComponent,
    DeliveryComponent,
    MasterPlanComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [
    app_routing_providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

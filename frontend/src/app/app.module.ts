import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { routing, app_routing_providers } from "./app.routing";

import { AppComponent } from './app.component';
import { PropertyHomeComponent } from './components/property-home/property-home.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { PropertyLocationComponent } from './components/property-location/property-location.component';
import { PropertyTypesAmenitiesComponent } from './components/property-types-amenities/property-types-amenities.component';
import { PropertySurfaceComponent } from './components/property-surface/property-surface.component';
import { PropertyFinancingComponent } from './components/property-financing/property-financing.component';
import { PropertyBrochureComponent } from './components/property-brochure/property-brochure.component';
import { PropertyDeliveryComponent } from './components/property-delivery/property-delivery.component';
import { PropertyMasterPlanComponent } from './components/property-master-plan/property-master-plan.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyHomeComponent,
    HomeComponent,
    RegisterComponent,
    PropertyLocationComponent,
    PropertyTypesAmenitiesComponent,
    PropertySurfaceComponent,
    PropertyFinancingComponent,
    PropertyBrochureComponent,
    PropertyDeliveryComponent,
    PropertyMasterPlanComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    app_routing_providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

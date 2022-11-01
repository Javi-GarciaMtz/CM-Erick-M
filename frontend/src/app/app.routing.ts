// Imports necesarios
import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Importar componentes
import { HomeComponent } from "./components/home/home.component";
import { PropertyBrochureComponent } from "./components/property-brochure/property-brochure.component";
import { PropertyDeliveryComponent } from "./components/property-delivery/property-delivery.component";
import { PropertyFinancingComponent } from "./components/property-financing/property-financing.component";
import { PropertyHomeComponent } from "./components/property-home/property-home.component";
import { PropertyLocationComponent } from "./components/property-location/property-location.component";
import { PropertyMasterPlanComponent } from "./components/property-master-plan/property-master-plan.component";
import { PropertySurfaceComponent } from "./components/property-surface/property-surface.component";
import { PropertyTypesAmenitiesComponent } from "./components/property-types-amenities/property-types-amenities.component";
import { RegisterComponent } from "./components/register/register.component";
import { ErrorComponent } from "./components/error/error.component";

// Definir las rutas
const app_routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'brochure', component: PropertyBrochureComponent},
    {path: 'delivery', component: PropertyDeliveryComponent},
    {path: 'financing', component: PropertyFinancingComponent},
    {path: 'property', component: PropertyHomeComponent},
    {path: 'location', component: PropertyLocationComponent},
    {path: 'master-plan', component: PropertyMasterPlanComponent},
    {path: 'surface', component: PropertySurfaceComponent},
    {path: 'types-amenities', component: PropertyTypesAmenitiesComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: ErrorComponent}
];


// Configuracion del export

// --> Configuracion para usar con el hash
// export const app_routing_providers: any[] = [];
// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(app_routes, {
//     useHash: true, // <- indicar que se usa el hash
// });

// --> Configuracion sin el hash
export const app_routing_providers: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(app_routes);

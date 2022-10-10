// Imports necesarios
import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Importar componentes
import { HomeComponent } from "./components/home/home.component";
import { PropertyHomeComponent } from "./components/property-home/property-home.component";


// Definir las rutas
const app_routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'property', component: PropertyHomeComponent}
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

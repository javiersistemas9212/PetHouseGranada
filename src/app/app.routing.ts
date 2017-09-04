import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { construirComponent } from './construyendoComponents/index';
import { AddDogComponent } from './agregarMascotas/index';
import { PetsDetailComponent } from './detallesPet/index';
import { EditDogsComponent } from './editarMascotas/index';
import { raceResolve, petResolve, petIdResolve } from './resolversApp/index';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, 
     resolve: {
         Petdog: petResolve
      }},  
    { path: 'Home', component: HomeComponent, 
     resolve: {
         Petdog: petResolve
      }},
    { path: 'dogs/add', component: AddDogComponent,
      resolve: {
         race: raceResolve
      }},
    //{ path: 'cats/add', component: AddCatComponent },
    { path: 'pet/:type/:id', component: PetsDetailComponent, 
     resolve: {
         raceDos: raceResolve,
         Petdogid: petIdResolve
      }},
	  { path: 'editDog/:id', component: EditDogsComponent},
	  { path: '', component: construirComponent},
  
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { ListService, DetallesService, DogService, CatService } from "./services/index";

import { HomeComponent } from './home/index';
import { AddDogComponent } from './agregarMascotas/index';
import { PetsDetailComponent } from './detallesPet/index';
import { EditDogsComponent } from './editarMascotas/index';
import { raceResolve, petResolve, petIdResolve } from './resolversApp/index';
import { construirComponent } from './construyendoComponents/index';

//import { ContactOwnerComponent } from './contactowner/index';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetsDetailComponent,
    AddDogComponent,
    EditDogsComponent,
    construirComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
   ListService,
   DetallesService,
   DogService,
   CatService,
   raceResolve,
   petResolve,
   petIdResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { pet } from '../models/index';
import { ListService } from "../services/index";
import { Observable } from 'rxjs';

// Declaramos las variables para jQuery
//declare var jQuery:any;
//declare var $:any;


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    public pets: pet[];
    public status: string;
    public errorMessage;
    public resultRes;

    //paginacion
    public longitudReg:number = 6;  //numero de mascotas por pagina
    public pets2: pet[];
    public divPag:number;
    public TotalPagMostradas:number = 3; //Esta variable nos dice cuantas paginas se muestran a la vez
    public hojas = new Array(); 
    public paginaActiva:number = 1; 
    public totalNPaginasMostradas = new Array();
  
   
    constructor( 
        private _route: ActivatedRoute,
        private _router: Router,
        private _listService: ListService
       ) {
     }

    ngOnInit() {
      
      let box_Carga = <HTMLElement>document.querySelector("#mascota-home .loading");
        box_Carga.style.visibility = "visible";

      this.resultRes = this._route.snapshot.data['Petdog'];
      this.pets = this.resultRes.data;
      this.pets.reverse();
      this.status = this.resultRes.status;
      this.paginador(this.paginaActiva);
      this.dividirPaginas(this.divPag);
      
      if(this.status !== "success"){
        console.log("Error en el servidor");
      }else{
        box_Carga.style.display = "none";
      }
   }


    paginador(pagAct:number){
      
      this.paginaActiva = pagAct;
      
      if (this.pets.length > 0) {
     this.divPag =   this.pets.length % this.longitudReg;
     if (this.divPag == 0){
            this.divPag = this.pets.length / this.longitudReg;

     }else{
          this.divPag = Math.floor(this.pets.length / this.longitudReg)+1 ;
     }

     
     this.pets2 = this.pets.slice(pagAct*this.longitudReg-this.longitudReg, pagAct * this.longitudReg);
     
       }
                      
  }

  dividirPaginas(cantidad:number){
    
       for(let i = 1; i <= cantidad; i++){
          this.hojas.push(i);
         
        if (i <= this.TotalPagMostradas){
          this.totalNPaginasMostradas.push(i);
        }                          

          
       }
  }


  navegarPag(direccion:string){
     
   if (direccion=='p'){    
    if (this.paginaActiva > 1){
         
          this.paginaActiva -- ;
          if (this.totalNPaginasMostradas.indexOf(this.paginaActiva) == -1){
               this.totalNPaginasMostradas.unshift(this.paginaActiva);
              this.totalNPaginasMostradas.pop();
           }
          this.paginador(this.paginaActiva);
          
       }
      }

   if (direccion=='n'){    
     if (this.paginaActiva < this.divPag){
         
          this.paginaActiva ++ ;
        if (this.totalNPaginasMostradas.indexOf(this.paginaActiva) == -1){
          this.totalNPaginasMostradas.push(this.paginaActiva);
          this.totalNPaginasMostradas.shift();
        }
          this.paginador(this.paginaActiva);
       }
      }

      
    }

}
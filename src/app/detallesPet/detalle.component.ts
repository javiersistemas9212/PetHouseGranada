import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DetallesService, DogService, CatService } from "../services/index";
import { petdetalle } from "../models/index";

@Component({
	 moduleId: module.id.toString(),
    templateUrl: 'detalle.component.html'
})	

export class PetsDetailComponent implements OnInit {
	public dog: petdetalle[];
	public errorMessage: string;
	public status: string;
    public tipo:string;
    public resultRes;

	constructor(
		private _DetallesService: DetallesService,
		private _DogService: DogService,
		private _CatService: CatService,
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		  
		  this.resultRes = this._route.snapshot.data['Petdogid'];
          this.dog = this.resultRes.data;
          this.status = this.resultRes.status;
          if(this.status !== "success"){
       			 console.log("Error en el servidor");
	      }
	   
    
      
	}


	onBorrarMascota(id){
   
    if (this.tipo != 'cat'){
			this._DogService.deleteDog(id)
						.subscribe(
							result => {
									this.status = result.status;
									console.log(result.status);

									if(this.status !== "success"){
										console.log("Error en el servidor");
									}

                                this._router.navigate(["Home"]);

							},
							error => {
								this.errorMessage = <any>error;
								
								if(this.errorMessage !== null){
									console.log(this.errorMessage);
									
								}
							});
	}else{

//Los Gatos aun no estan listos
	   this._CatService.deleteCat(id)
						.subscribe(
							result => {
									this.status = result.status;

									if(this.status !== "success"){
										alert("Error en el servidor");
									}

                                this._router.navigate(["Home"]);

							},
							error => {
								this.errorMessage = <any>error;
								
								if(this.errorMessage !== null){
									console.log(this.errorMessage);
									alert("Error en la petición");
								}
							});

	}
}

}
import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DogService, ListService, DetallesService } from "../services/index";
import { petdetalle, race } from "../models/index";
import { Observable } from 'rxjs';

@Component({
    selector: "<editDog>",
    moduleId: module.id.toString(),
    templateUrl: '../agregarMascotas/AddDogs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class EditDogsComponent implements OnInit {
	public titulo: string = "Editar Mascota";
	public stat: boolean; 
	public races: race[];
	public Dog: petdetalle;
	public errorMessage: string;
	public status: string;
    public resultRes;

  @Input() dogid: number;
  @Input() dognombre: string;
  @Input() dogedad: number;
  @Input() dograza: string;
  @Input() dogdescripcion: string;
  @Input() dogimagen: string;
  
  
  	constructor(
		private _dogService: DogService,
        private _listService: ListService,
        private _DetallesService: DetallesService,
        private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
	    
	    this.resultRes = this._route.snapshot.data['raceDos'];
		this.races = this.resultRes.data;
	    this.status = this.resultRes.status;
       
       if(this.status !== "success"){
			console.log("Error en el servidor");
		} 
        this.stat = false;
	    this.Dog = new petdetalle(this.dogid, 0, this.dognombre, this.dogedad, this.dograza, this.dogdescripcion, this.dogimagen);
		
	
	}

	onChangePet(){
		this._route.params.forEach((params: Params) => {
			 
			 let id = params["id"];

			 this._dogService.editDog(id, this.Dog).subscribe(
					response => {
						this.status = response.status;
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
					}
				);
		 });
	
		
	}


}
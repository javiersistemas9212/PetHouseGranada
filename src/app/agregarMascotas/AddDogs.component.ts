import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DogService, ListService } from "../services/index";
import { petdetalle, race } from "../models/index";
import { Observable } from 'rxjs';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'AddDogs.component.html'
})

export class AddDogComponent implements OnInit {
	public titulo = "Agregar Mascota";
	public Dog: petdetalle;
    public races: race[];
    public stat: boolean; 
    public resultRes;
    public errorMessage: string;
	public status: string;
	public filesToUpload: Array<File>;
	public resultUpload;
	
   
	constructor(
		private _DogService: DogService,
		private _ListService: ListService,
		private _route: ActivatedRoute,
		private _router: Router
	){}


	ngOnInit(){
        
		this.Dog = new petdetalle (0, 0, "", 0, "", "","null");
	    
        this.resultRes= this._route.snapshot.data['race'];
	    this.races = this.resultRes.data;
	    this.status = this.resultRes.status;
	    
	    if(this.status !== "success"){
			console.log("Error en el servidor");
		} 
	    this.stat = true;
	}

   onSubmit(){
		 this._DogService.addDog(this.Dog).subscribe(
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
						alert("Error en la petición");
					}}
			);

	}


	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;

		this.makeFileRequest("https://apipethouse.000webhostapp.com/api.php/upload-file", [], this.filesToUpload).then((result) => {
				this.resultUpload = result;
				this.Dog.imagen = this.resultUpload.filename;
				console.log(this.Dog.imagen);
                this.Dog.dueno  = 0;
		}, (error) =>{
			console.log(error);
		});
		
	}


	makeFileRequest(url: string, params: Array<string>, files: Array<File>){
		return new Promise((resolve, reject) => {
				var formData: any = new FormData();
				var xhr = new XMLHttpRequest();

				for(var i = 0; i < files.length; i++){
					formData.append("uploads[]", files[i], files[i].name);
				}

				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(xhr.status == 200){
							resolve(JSON.parse(xhr.response));
						}else{
							reject(xhr.response);
						}
					}
				}
				xhr.open("POST", url, true);
				xhr.send(formData);
			});
	}

	

}
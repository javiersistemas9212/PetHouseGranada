import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {petdetalle} from "../models/index";



@Injectable()
export class DogService{
	constructor(private _http: Http){}

	addDog(Dog: petdetalle) {
		let json = JSON.stringify(Dog);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post("https://apipethouse.000webhostapp.com/api.php/Dogs", 
				params, {headers: headers}).map(response => response.json());
    }


	deleteDog(id: string){
		return this._http.get("https://apipethouse.000webhostapp.com/api.php/delete-pet/"+id+"/dog")
							.map(res => res.json());
	}


	editDog(id: string, dog: petdetalle) {
		let json = JSON.stringify(dog);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post("https://apipethouse.000webhostapp.com/api.php/updateDog/"+id, 
				params, {headers: headers}).map(res => res.json());
	}

}

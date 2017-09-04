import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ListService{
   
   
	constructor(private _http: Http){}

	
	getPets(){
		return this._http.get("https://apipethouse.000webhostapp.com/api.php/ConsultarDeCadaUno")
							.map(response =>response.json());
	}

	 listRaceDog() {
         return this._http.get("https://apipethouse.000webhostapp.com/api.php/ConsultarRazaPerro")
              .map(response =>response.json());
       }



 

	
}
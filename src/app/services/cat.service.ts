import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import { petdetalle } from "../models/index";


@Injectable()
export class CatService{
	constructor(private _http: Http){}

	addCat(Cat: petdetalle) {
		let json = JSON.stringify(Cat);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post("http://localhost/Api/api.php/Cats", 
				params, {headers: headers}).map(response => response.json());
    	}

    deleteCat(id: string){
		return this._http.get("https://apipethouse.000webhostapp.com/api.php/delete-pet/"+id+"/cat")
							.map(res => res.json());
	}

}

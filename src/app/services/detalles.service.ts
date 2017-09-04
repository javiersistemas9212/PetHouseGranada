import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import { petdetalle } from "../models/index";


@Injectable()
export class DetallesService{
	constructor(private _http: Http){}

	getDetailId(id: string, type: string){

		
 	return this._http.get("https://apipethouse.000webhostapp.com/api.php/Consultarpet/"+id+"/" + type)
							.map(res => res.json());
			
    }
}
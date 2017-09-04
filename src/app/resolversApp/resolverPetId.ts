import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Params} from '@angular/router';
import { DetallesService } from "../services/index";

@Injectable()
export class petIdResolve implements Resolve<any> {

  constructor(private _DetallesService: DetallesService) {}

  resolve(route: ActivatedRouteSnapshot, params: Params) {

  	return 	this._DetallesService.getDetailId(route.params['id'], route.params['type']);
		

     
       // return route.params.forEach((params: Params) => {

		//	let id = params["id"];
		//	let tipo = params["type"];
			
		//	this._DetallesService.getDetailId(id, tipo);
		
          //  });
  }
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ListService } from "../services/index";

@Injectable()
export class raceResolve implements Resolve<any> {

  constructor(private _ListService: ListService) {}

  resolve(route: ActivatedRouteSnapshot) {
     
        return this._ListService.listRaceDog();

  }
}
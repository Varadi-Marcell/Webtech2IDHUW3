import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Guitar} from "../model/Guitar";
import {GuitarService} from "./guitar.service";

@Injectable({
  providedIn: 'root'
})
export class GuitarDetailsResolver implements Resolve<Guitar> {

  constructor(private guitarService: GuitarService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Guitar> {
    console.log(route.params['id']);
    return this.guitarService.getGuitarById((route.params['id']));
  }

}

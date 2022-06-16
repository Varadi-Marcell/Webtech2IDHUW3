import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {UserService} from "./user.service";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<User> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    console.log(route.params['id']);
    return this.userService.getUserById((route.params['id']));
  }
}

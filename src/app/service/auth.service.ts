import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

   /*getOneUser(username: string, password: string): Observable<User[]> {
    return this.http.post<User[]>("/api/user/login", {"username": username, "password": password});
  }*/

  async getOneUser(username: string, password: string) {
    return lastValueFrom(
      this.http.get<User>('http://localhost:3000/user/login', {
        params: { username: username, password: password },
      })
    );
  }

  registerUser(username:any,password:any): Observable<User[]> {
    return this.http.post<User[]>("http://localhost:3000/user/create-user", {"username": username,"password": password});
  }

  async authenticateUser(username: string, password: string) {
    return this.getOneUser(username, password);
  }
}

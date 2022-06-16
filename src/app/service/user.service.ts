import { Injectable } from '@angular/core';
import {lastValueFrom, Observable} from "rxjs";
import {User} from "../model/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/user/get-users');
  }

  getUserById(id:any): Observable<User> {
    console.log(id);
    return this.http.post<User>('http://localhost:3000/user/get-user', {"id" : id});
  }

  deleteUser(id:any) {
    return lastValueFrom(this.http.delete('http://localhost:3000/user/delete-user/'+id));
  }

  updateUser(id:any,user: User): Observable<any>{
    return this.http.patch('http://localhost:3000/user/update-user', {"_id":id, "username": user.username, "password": user.password });
  }
}

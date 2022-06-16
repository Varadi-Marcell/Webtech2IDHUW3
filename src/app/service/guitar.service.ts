import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";
import {User} from "../model/User";
import {Guitar} from "../model/Guitar";



@Injectable({
  providedIn: 'root'
})
export class GuitarService {

  constructor(private http: HttpClient) { }

  getAllGuitars(): Observable<Guitar[]>{
    return this.http.get<Guitar[]>('http://localhost:3000/guitar/get-guitars');
  }

  getGuitarById(id:any): Observable<Guitar> {
    console.log(id);
    return this.http.post<Guitar>('http://localhost:3000/guitar/get-guitar', {"id" : id});
  }

  deleteGuitar(id:any) {
    return lastValueFrom(this.http.delete('http://localhost:3000/guitar/delete-guitar/'+id));
  }

  updateGuitar(id:any,guitar: Guitar): Observable<any>{
    return this.http.patch('http://localhost:3000/guitar/update-guitar', {"id":id, "brand": guitar.brand, "name": guitar.name,"price": guitar.price });
  }

  createGuitar(guitar:Guitar): Observable<Guitar[]> {
    return this.http.post<Guitar[]>("http://localhost:3000/guitar/create-guitar", guitar);
  }
}

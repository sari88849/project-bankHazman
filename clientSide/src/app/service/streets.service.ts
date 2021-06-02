import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Streets } from '../classes/streets';

@Injectable({
  providedIn: 'root'
})
export class StreetsService {

  listStreets: Array<Streets> = new Array<Streets>();

  url: string = "http://localhost:51040/api/Streets/"


  constructor(public http: HttpClient) { }
  //פונקציית שליפה
  getAll(): Observable<Array<Streets>> {
    return this.http.get<Array<Streets>>(this.url + "getStreets")
  }

  streetbycity(): Observable<Array<Streets>> {
    return this.http.get<Array<Streets>>(this.url + "streetbycity(1)")

  }
}

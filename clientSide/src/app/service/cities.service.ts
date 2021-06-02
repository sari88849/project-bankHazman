import { Injectable } from '@angular/core';
import { Cities } from '../classes/cities';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  url: string = "http://localhost:51040/api/Cities/"
  val: number;

  listcity: Array<Cities> = new Array<Cities>();

  constructor(public http: HttpClient) { }
  //פונקציית שליפה
  getAll(): Observable<Array<Cities>> {
    return this.http.get<Array<Cities>>(this.url + "getCities")
  }
}

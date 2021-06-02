import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Limit } from '../classes/limit';
import { Observable } from 'rxjs';
import { LimitToTeacher } from '../classes/limit-to-teacher';
import { LimitChild } from '../classes/limitChild';

@Injectable({
  providedIn: 'root'
})
export class LimitService {

  url: string = "http://localhost:51040/api/Limit/"
  listLimit: Array<Limit> = new Array<Limit>()
  id: number;

  constructor(public http: HttpClient) { }

  getLimitChild(): Observable<Array<LimitChild>> {
    debugger;
    return this.http.get<Array<LimitChild>>(this.url + "getCountToLimit")
  }
  getAll(id: number): Observable<Array<Limit>> {
    debugger;
    return this.http.get<Array<Limit>>(this.url + "limitToFather/" + id)
  }
  getLimitById(id: number): Observable<Limit> {
    debugger;
    return this.http.get<Limit>(this.url + "getLimitById/" + id)
  }

  AddLimit(lim: Limit): Observable<boolean> {
    return this.http.put<boolean>(this.url + "AddLimit", lim)
  }

  limitToFather(limit: number): Observable<Limit> {
    debugger;
    return this.http.get<Limit>(this.url + "limitToFather/" + limit)
  }

}
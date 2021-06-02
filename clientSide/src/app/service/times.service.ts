import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Times } from '../classes/times';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  url: string = "http://localhost:51040/api/Times/"

  listTimes: Array<Times> = new Array<Times>();
  IdTime: number;

  constructor(public http: HttpClient) {
    this.listTimes.push(new Times(1, "בוקר"))
    this.listTimes.push(new Times(2, "צהריים"))
    this.listTimes.push(new Times(3, "ערב"))
    this.listTimes.push(new Times(4, "כל היום"))


  }
  getTimeById(id: number): Observable<Times> {
    return this.http.get<Times>(this.url + "getTimeById/" + id)
  }
}

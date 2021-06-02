import { Injectable } from '@angular/core';
import { LimitToTeacher } from '../classes/limit-to-teacher';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LimitToTeacherService {

  url: string = "http://localhost:51040/api/LimitToTeacher/";
  lmt: LimitToTeacher


  constructor(public http: HttpClient) { }

  AddLimitToTeacher(limToTeach: LimitToTeacher): Observable<boolean> {
    debugger;
    return this.http.put<boolean>(this.url + "AddLimitToTeacher", limToTeach)
  }






  getLimitToTeacher(lim: number): Observable<LimitToTeacher> {
    return this.http.get<LimitToTeacher>(this.url + "getLimitToTeacher/" + lim)
  }

  getLimitByidAndTeacher(lim: number, teacher: number): Observable<LimitToTeacher> {
    debugger;
    return this.http.get<LimitToTeacher>(this.url + "getLimitByidAndTeacher/" + lim + '/' + teacher)
  }

  GetUsereByIdAndpass(ltt: LimitToTeacher): Observable<LimitToTeacher> {
    debugger;
    return this.http.post<LimitToTeacher>(this.url + "GetUsereByIdAndpass", ltt)
  }



}

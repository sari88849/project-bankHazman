import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Useres } from '../classes/useres';
import { NgIf } from '@angular/common';
import { Recommendation } from '../classes/recommendation';
import { RequestService } from './request.service';
import { Limit } from '../classes/limit';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  url: string = "http://localhost:51040/api/Users/"
  CurrentUser: Useres;

  listUsers: Array<Useres> = new Array<Useres>();
  sector: number;
  time: number;
  id: number;
  min1;
  min2;
  min: number;
  forgetUser: Useres;

  constructor(public http: HttpClient, public requestService: RequestService) {
    // this.min1=this.getMin1();
    // this.min2=this.getMin2();
  }
  // מחזיר את כל האנשים
  getAll(): Observable<Array<Useres>> {
    debugger;
    return this.http.get<Array<Useres>>(this.url + "getUsers")
  }

  GetUsereByIdAndpass(user: Useres): Observable<Useres> {
    debugger;
    return this.http.post<Useres>(this.url + "GetUsereByIdAndpass", user)
  }
  //הוספת משתמש
  AddUser(user: Useres): Observable<boolean> {
    debugger;

    return this.http.post<boolean>(this.url + "AddUser", user)

  }
  update(user: Useres): Observable<boolean> {
    debugger;
    return this.http.post<boolean>(this.url + "update", user)
  }

  //מחזיר רשימת אנשים ע"פ בקשות
  getUserIsCorrect(user: number, sector: number, min: number, time: number, limit: number): Observable<Array<Useres>> {

    return this.http.get<Array<Useres>>(this.url + "getUserIsCorrect/" + user + '/' + sector + "/" + min + "/" + time + "/" + limit)
  }

  //מחזיר את רשימת הפרטים של המשתמש
  getttUser(id: number): Observable<Array<Useres>> {
    return this.http.get<Array<Useres>>(this.url + "getttUser/" + id)
  }
  getUserById(id: number): Observable<Useres> {
    debugger;
    return this.http.get<Useres>(this.url + "getUserById/" + id)
  }


  getMin1(id: number): Observable<number> {
    debugger;
    return this.http.get<number>(this.url + "getMin1/" + id)
  }

  getMin2(id: number): Observable<number> {
    debugger;
    return this.http.get<number>(this.url + "getMin2/" + id)
  }

  getMin() {
    this.min = this.listUsers.length;
  }
  //המלצות ותגובות
  RecommendationText(codeUser: number, codeLim: number): Observable<Array<Recommendation>> {
    debugger;
    return this.http.get<Array<Recommendation>>(this.url + "RecommendationText/" + codeUser + "/" + codeLim)
  }

  getUserByDateAndMail(u: Useres): Observable<Useres> {
    debugger
    return this.http.post<Useres>(this.url + "getUserByDateAndMail", u)
  }

  SendMail(result: string, email: Useres): Observable<string> {
    debugger;
    return this.http.get<string>(this.url + 'SendMail/' + result + '/' + email.CodeUser);

  }



  // getMin2(){}

}

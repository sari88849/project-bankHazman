import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getNumberOfCurrencyDigits, Time } from '@angular/common';
import { Useres } from '../classes/useres';
import { Sector } from '../classes/sector';
import { Min } from '../classes/min';
import { Times } from '../classes/times';
import { SaveLesson } from '../classes/saveLesson';
import { Waiting } from '../classes/waiting';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url: string = "http://localhost:51040/api/Request/"


  listRequest: Array<Request> = new Array<Request>();
  listSaveLesson: Array<SaveLesson> = new Array<SaveLesson>();
  sector: number;
  times: Times;
  IdSector: Sector;
  IdMin: Min;
  listUser: Array<Useres> = new Array<Useres>();
  codelimit: number;
  userSave: SaveLesson[];
  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Request>> {
    return this.http.get<Array<Request>>(this.url + "getRequest")
  }


  SendMail(TeacherUser: Useres, StudentUser: Useres, codelimit: number): Observable<string> {
    debugger;
    //return this.http.get<boolean>(this.url+'SendMail/'+TeacherUser.CodeUser+'/'+StudentUser.CodeUser+'/'+codelimit);
    return this.http.get<string>(this.url + 'SendMail/' + TeacherUser.CodeUser + '/' + StudentUser.CodeUser + '/' + codelimit);
  }





}






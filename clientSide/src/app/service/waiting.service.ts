import { Injectable } from '@angular/core';
import { Waiting } from '../classes/waiting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LimitToTeacher } from '../classes/limit-to-teacher';
import { Useres } from '../classes/useres';


@Injectable({
  providedIn: 'root'
})
export class WaitingService {

  url: string = "http://localhost:51040/api/Waiting/"

  listWaiting: Array<Waiting> = new Array<Waiting>();

  constructor(public http: HttpClient) { }

  // מחזיר את כל האנשים
  getWaiting(): Observable<Array<Waiting>> {
    return this.http.get<Array<Waiting>>(this.url + "getWaiting")
  }


  //הוספת משתמש
  AddWaiting(wait: Waiting): Observable<boolean> {
    return this.http.put<boolean>(this.url + "AddWaiting", wait)
  }

  deleteWaiting(waitingId: number): Observable<boolean> {
    debugger
    return this.http.delete<boolean>(this.url + "deleteWaiting/" + waitingId)
  }

  getLimitByUser(codeuser: number): Observable<Array<Waiting>> {
    debugger
    return this.http.get<Array<Waiting>>(this.url + 'getLimitByUser/' + codeuser)
  }
  SendMailTeacherToUser(TeacherUser: Useres, StudentUser: Waiting, codelimit: number, waitingId: number): Observable<string> {
    debugger;
    //return this.http.get<boolean>(this.url+'SendMail/'+TeacherUser.CodeUser+'/'+StudentUser.CodeUser+'/'+codelimit);
    return this.http.get<string>(this.url + 'SendMailTeacherToUser/' + TeacherUser.CodeUser + '/' + StudentUser.CodeUser + '/' + codelimit + '/' + waitingId);
  }

  GetWaitingById(waitingId: number): Observable<boolean> {
    debugger
    return this.http.get<boolean>(this.url + 'GetWaitingById/' + waitingId)
  }
  getIfWaiting(waitingId: number): Observable<number> {
    debugger
    return this.http.get<number>(this.url + "getIfWaiting/" + waitingId)
  }

}

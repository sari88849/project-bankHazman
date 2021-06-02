import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Lessons } from '../classes/lessons';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()

export class LessonsService {

  url: string = "http://localhost:51040/api/Lesson/"
  listLessons: Array<Lessons> = new Array<Lessons>();
  numlessens2: number;

  // d:JSON=JSON["id"][1]["start"][20-08-2020]

  constructor(private http: HttpClient, public userService: UserService) { }


  getAll(id: number): Observable<Array<Lessons>> {
    debugger;
    return this.http.get<Array<Lessons>>(this.url + "INotLearn/" + id)
  }

  getAll1(): Observable<Array<Lessons>> {
    debugger;
    return this.http.get<Array<Lessons>>('assets/scheduleevents.json')
  }

  // הצגת הלוח שנה
  getEvents() {
    debugger;
    return this.http.get<any>('assets/scheduleevents.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }

  addEvent(d: JSON) {
    return this.http.put<JSON>('assets/scheduleevents.json', d)
  }



  getAll2(): Observable<Array<Lessons>> {
    debugger;
    return this.http.get<Array<Lessons>>(this.url + "ILearn/"); { debugger }
  }

  //הוספת משתמש
  AddLesson(less: Lessons): Observable<boolean> {
    debugger;
    return this.http.put<boolean>(this.url + "AddLesson", less)
  }
  getNumLesson() {
    debugger;
    return this.http.get<number>(this.url + "countLesson" + this.userService.CurrentUser.CodeUser).subscribe(data => this.numlessens2 = data, err => alert(err));
  }
  //כמות השיעורים שאני הייתי המורה
  getLessonITeach(id: number): Observable<number> {
    debugger;
    return this.http.get<number>(this.url + "getLessonITeach/" + id)
  }

  GetAllById(): Observable<Array<Lessons>> {
    return this.http.get<Array<Lessons>>(this.url + "GetAllById/" + this.userService.CurrentUser.CodeUser)
  }
}

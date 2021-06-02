import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonsService } from 'src/app/service/lessons.service';
import { Lessons } from 'src/app/classes/lessons';
import { UserService } from 'src/app/service/user.service';
import { Useres } from 'src/app/classes/useres';
import { LimitService } from 'src/app/service/limit.service';
import { Limit } from 'src/app/classes/limit';
import { isToday } from 'date-fns';
import { WaitingService } from 'src/app/service/waiting.service';
import { Waiting } from 'src/app/classes/waiting';


@Component({
  selector: 'app-confirm-form',
  templateUrl: './confirm-form.component.html',
  styleUrls: ['./confirm-form.component.css']
})
export class ConfirmFormComponent implements OnInit {
  teacherId: any;
  studentId: any;
  CodeLimit: any;
  waitingId: any;
  less: Lessons = new Lessons();
  DateLess: Date;
  m: boolean;
  k: boolean;
  usert: any = " "
  users: any = " "
  limit: any = " "
  waiting: Waiting
  ifClick: boolean = false
  constructor(public route: ActivatedRoute, public limitService: LimitService, public userService: UserService, public lessonsService: LessonsService, public router: Router, public waitingService: WaitingService) { }

  ngOnInit(): void {
    debugger;
    this.route.params.subscribe(parm => {
      this.teacherId = parm["tId"]
      this.studentId = parm["sId"]
      this.CodeLimit = parm["cl"]
      this.waitingId = parm["wi"]
      console.log(this.waitingId)
      this.userService.getUserById(this.teacherId).subscribe(data => { this.usert = data.FName + ' ' + data.LName })

      this.userService.getUserById(this.studentId).subscribe(data1 => { this.users = data1.FName + ' ' + data1.LName })
      debugger
      // this.limitService.getLimitById(this.CodeLimit).subscribe(data2=>{this.limit=data2.NameLimit})
      this.limitService.getLimitById(this.CodeLimit).subscribe(data3 => { this.limit = data3.NameLimit })

      // this.waitingService.GetWaitingById(this.waitingId).subscribe(data4 => this.w1 = data4)

      // alert("student is: " + this.studentId + " teacher is: " + this.teacherId + " limit is:" + this.CodeLimit)
      // alert(this.waitingId)
    })

    // alert("student is: " + this.studentId + " teacher is: " + this.teacherId + " limit is:" + this.CodeLimit)

  }


  AddLesson() {
    if (!this.waitingId) {
      debugger;
      let date = new Date()
      if (this.DateLess < date) {
        alert('אין אפשרות לבחור תאריך שעבר')
      }
      else {
        this.less.CodeLimit = this.CodeLimit;
        this.less.CodeStudent = this.studentId;
        this.less.CodeTeacher = this.teacherId;
        this.less.DateLesson = this.DateLess;
        this.lessonsService.AddLesson(this.less).subscribe(data => { this.m = data });
        this.ifClick = true
      }
    } else {
      debugger;
      let date = new Date()
      if (this.DateLess < date) {
        alert('אין אפשרות לבחור תאריך שעבר')
      }
      else {
        this.less.CodeLimit = this.CodeLimit;
        this.less.CodeStudent = this.studentId;
        this.less.CodeTeacher = this.teacherId;
        this.less.DateLesson = this.DateLess;
        this.lessonsService.AddLesson(this.less).subscribe(data => { this.m = data });
        this.ifClick = true
        this.waitingService.deleteWaiting(this.waitingId).subscribe(data => { this.k = data })
      }

    }



    // alert("השיעור נוסף בהצלחה")
  }

}

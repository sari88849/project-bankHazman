import { Component, OnInit } from '@angular/core';
import { LessonsService } from 'src/app/service/lessons.service';
import { Lessons } from 'src/app/classes/lessons';
import { Useres } from 'src/app/classes/useres';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import swal from 'sweetalert';

import { arrayToHash } from '@fullcalendar/core/util/object';
import { dateToLocalArray } from '@fullcalendar/core/datelib/marker';
import { Observable } from 'rxjs';
import { title } from 'process';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { LimitToTeacherService } from 'src/app/service/limit-to-teacher.service';
import { LimitToTeacher } from 'src/app/classes/limit-to-teacher';
import { Recommendation } from 'src/app/classes/recommendation';
import { th } from 'date-fns/locale';
import { LimitService } from 'src/app/service/limit.service';

// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';
// import { info } from 'console';

@Component({
  selector: 'app-to-listing',
  templateUrl: './to-listing.component.html',
  styleUrls: ['./to-listing.component.css']
})
export class ToListingComponent implements OnInit {
  isLearn: boolean = true;
  options: any;
  event: any;

  events: any[] = [];
  num1: any;
  numlessens: number;
  numLessonITeach: number;
  listLessons: Array<Lessons> = new Array<Lessons>();
  user: Useres;
  loaded: boolean = false;
  mycolor: string;
  checked: boolean;
  listed_register: boolean = false;
  click: boolean = false
  displayModal: any;
  listLesson: Array<Lessons> = new Array<Lessons>();
  eventsObs: Observable<any[]>;

  openModal: boolean = false;
  openMod: boolean = false;
  nuser: Useres;
  text: string;
  info: any;
  userName: any;
  listLimitToTeacher: Array<LimitToTeacher> = new Array<LimitToTeacher>();
  l: LimitToTeacher = new LimitToTeacher();
  r: Recommendation = new Recommendation();
  usert: any = " "
  users: any = " "
  limit: any = " "
  teacherId: any;

  buttons: Array<boolean>;

  studentId: any;
  CodeLimit: any;
  val1: string;
  val2: string;
  codeLTT: number;
  d: number;
  m: boolean;
  exportColumns: any[];


  constructor(public router: Router, public lessonsService: LessonsService, public userService: UserService, public recommendationService: RecommendationService, public limitToTeacherService: LimitToTeacherService, public limitService: LimitService) { }

  ngOnInit() {
    // document.getElementById('userModal').style.display = 'block'

    this.eventsObs = this.lessonsService.GetAllById();
    this.eventsObs.subscribe(data => {
      // alert("hello");
      console.log(data)
      this.listLesson = data;

      for (let i = 0; i < this.listLesson.length; i++) {
        var date: Date = new Date(this.listLesson[i].DateLesson)

        this.event = {

          id: this.listLesson[i].CodeLimit,
          idT: this.listLesson[i].CodeTeacher,
          idS: this.listLesson[i].CodeStudent,
          // title: "שם התחום" + this.listLesson[i].CodeLimit + " שם המורה" + this.listLesson[i].CodeTeacher,
          title: 'לפרטים על השיעור- לחץ עלי',

          start: new Date(date),
          // onClick: this.modal()
        };

        if (this.listLesson[i].CodeTeacher == this.userService.CurrentUser.CodeUser) {
          this.event['backgroundColor'] = 'green';
        }
        else {
          this.event['backgroundColor'] = 'red'
        }
        this.events.push(this.event)

        this.userName = this.listLesson[i].CodeTeacher;
        if (this.userService.CurrentUser.CodeUser == this.listLesson[i].CodeTeacher) {
          // document.getElementById(this.userName).style.backgroundColor = 'green'
        }
        console.log(this.events)
      }
      this.loaded = true;

    })


    var base = this;

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      displayEventTime: false,

      eventClick: function (info) {
        base.registerLesson(info);
        // this.openMoal = !this.openModal;
        // this.openModalClick();
      },


      defaultDate: new Date(),
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },

      editable: true,
      loaded: true


    };
    this.iTeacher();
    this.user = this.userService.CurrentUser;
    this.get1();
    this.lessonsService.addEvent([3]["2017-02-19"])

    this.exportColumns = this.listLesson.map(col => ({ title: col.CodeLesson, dataKey: col.CodeLimit }));
  }


  idTr: number;
  idLim: any;
  idSt: number;
  dateN: Date;
  registerLesson(info: any) {
    debugger;
    this.idTr = info.event.extendedProps.idT;
    this.idSt = info.event.extendedProps.idS;
    this.idLim = info.event.id;
    this.dateN = info.event.start;
    console.log(info.event.title);
    this.userService.getUserById(this.idTr).subscribe(data => { this.usert = data.FName + ' ' + data.LName })

    this.userService.getUserById(this.idSt).subscribe(data1 => { this.users = data1.FName + ' ' + data1.LName })
    debugger
    // this.limitService.getLimitById(this.CodeLimit).subscribe(data2=>{this.limit=data2.NameLimit})
    this.limitService.getLimitById(this.idLim).subscribe(data3 => { this.limit = data3.NameLimit })
    this.openModalClick()

  }

  //פונקצייה לפתיחת המודל
  openModalClick() {
    //שאלה האם אני המורה או התלמידה
    if (this.idTr == this.userService.CurrentUser.CodeUser) {
      // alert("אני המורה")
      this.openMod = !this.openMod;
      document.getElementById('openMod').style.display = 'block'
    }

    else {
      this.openModal = !this.openModal;
      document.getElementById('openModal').style.display = 'block'
    }
  }

  getCountLessenes() {
    this.numlessens = this.listLessons.length;
  }
  get1() {
    this.lessonsService.getAll(this.userService.CurrentUser.CodeUser).subscribe(data => { debugger; this.listLessons = data, this.getCountLessenes() });

  }


  iTeacher() {
    this.lessonsService.getLessonITeach(this.userService.CurrentUser.CodeUser).subscribe(data => this.numLessonITeach = data)
  }

  getUsers() {
    this.router.navigate(["/getUsers"])
  }
  toListing() {
    this.router.navigate(["/toListing"])
  }
  MyItem() {
    this.router.navigate(["/MyItem"])
  }
  AddRequest() {
    this.router.navigate(["/AddRequest"])
  }
  openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  clalim() {
    this.router.navigate(['/clalim'])
  }

  closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }

  getLimitByidAndTeacher() {
    debugger;

    var ltt = new LimitToTeacher(0, this.idLim.trim(), this.idTr, 0)
    this.limitToTeacherService.GetUsereByIdAndpass(ltt).subscribe(data => {
      debugger;
      if (data != null) {


        this.limitToTeacherService.lmt = data;
        alert(this.limitToTeacherService.lmt.CodeLimitToTeacher)
      }
    })

    // this.limitToTeacherService.getLimitByidAndTeacher(this.limitToTeacherService.lmt.CodeLimit, this.limitToTeacherService.).subscribe(data => { this.d = data.CodeLimitToTeacher, alert(data.CodeLimitToTeacher) })
    console.log(this.limitToTeacherService.lmt.CodeLimitToTeacher);
    // console.log(this.d)
    this.AddRecommendation()

  }

  //הוספת המלצה
  AddRecommendation() {
    debugger;
    // this.limitToTeacherService.getLimitByidAndTeacher(this.idLim, this.idTr).subscribe(data => { this.d = data.CodeLimitToTeacher, alert(data.CodeLimitToTeacher) })
    // // this.limitToTeacherService.getLimitByidAndTeacher(this.idLim, this.idTr).subscribe(data => { this.d = data.CodeLimitToTeacher })

    // console.log(this.d)
    debugger;
    // this.r.CodeLimitToTeacher = this.codeLTT;
    // this.r.CodeLimitToTeacher = this.limitToTeacherService.lmt.CodeLimitToTeacher;
    this.r.CodeLimitToTeacher = 8
    this.r.RecommendationText = this.text;
    if (this.val1 == "המלצה") {
      alert('המלצה')
    }
    if (this.val2 == "תגובה") {
      alert('תגובה')
    }

    if (this.val1 == "המלצה") {
      this.r.Reply = true;
    }
    if (this.val2 == "תגובה") {
      this.r.Reply = false
    }

    this.r.NotTime = false;
    this.limitToTeacherService.getLimitByidAndTeacher(this.idLim, this.idTr).subscribe(data => { this.r.CodeLimitToTeacher = data.CodeLimitToTeacher })

    debugger;
    this.recommendationService.AddRecommendation(this.r).subscribe(data => { this.m = data, alert('ההמלצה נוספה') })
  }


}

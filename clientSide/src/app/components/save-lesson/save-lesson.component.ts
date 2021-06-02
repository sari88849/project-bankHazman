import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Limit } from 'src/app/classes/limit';
import { LimitToTeacher } from 'src/app/classes/limit-to-teacher';
import { Useres } from 'src/app/classes/useres';
import { Waiting } from 'src/app/classes/waiting';
import { LimitToTeacherService } from 'src/app/service/limit-to-teacher.service';
import { LimitService } from 'src/app/service/limit.service';
import { RequestService } from 'src/app/service/request.service';
import { SectorService } from 'src/app/service/sector.service';
import { TimesService } from 'src/app/service/times.service';
import { UserService } from 'src/app/service/user.service';
import { WaitingService } from 'src/app/service/waiting.service';

@Component({
  selector: 'app-save-lesson',
  templateUrl: './save-lesson.component.html',
  styleUrls: ['./save-lesson.component.css']
})
export class SaveLessonComponent implements OnInit {

  listSaveLesson: Array<Waiting> = new Array<Waiting>();
  CodeL: any;
  lim: any = '';
  ChooseUser: Waiting;
  alreadyCheck: boolean = false;
  nolimit: boolean = false;
  idLim: number;
  otherLimit: string;
  limit: Limit
  limit2: string
  listLimitToTeacher: Array<Waiting> = new Array<Waiting>()
  openModal: boolean = false
  ifClick: boolean = false
  ifClick1: boolean = false
  ifClick2: boolean = false
  openModal1: boolean = false
  ifShow: boolean = false

  constructor(public waitingService: WaitingService, public limitService: LimitService, public requestService: RequestService, public timesService: TimesService, public sectorService: SectorService, public userService: UserService, public router: Router, public limitToTeacher: LimitToTeacherService) { }

  ngOnInit(): void {

    this.getAll();
    debugger;
    this.getLimitByUser()

    // this.limitService.getLimitById(this.idLim).subscribe(data3 => { this.limit = data3.NameLimit })


    debugger
    // this.limitService.getLimitById(this.CodeLimit).subscribe(data2=>{this.limit=data2.NameLimit})
    // this.limitService.getLimitById(this.idLim).subscribe(data3 => { this.limit2 = data3.NameLimit })

  }


  // getAll() {
  //   this.waitingService.getWaiting().subscribe(data => this.listSaveLesson = data)
  // }

  getAll() {
    debugger
    this.waitingService.getWaiting().subscribe(data => {
      debugger
      this.listSaveLesson = data;
      ;
      this.fullWait(this.listSaveLesson)
    }
    )

  }
  fullWait(list: Waiting[]) {
    debugger;
    list.forEach(element => {
      this.limitService.getLimitById(element.CodeLimit).subscribe(data => element.NameLimit = data.NameLimit)
      this.timesService.getTimeById(element.CodeTime).subscribe(data => element.NameTime = data.NameTime)
      this.sectorService.getSectorById(element.CodeSector).subscribe(data => element.NameSector = data.NameSector)
    });
  }

  getLimitByUser() {
    debugger;
    this.waitingService.getLimitByUser(this.userService.CurrentUser.CodeUser).subscribe(data => {
      this.listLimitToTeacher = data
      this.fullWait(this.listLimitToTeacher)
    }
    )
  }

  sendMail() {
    debugger;
    // this.requestService.SendMail(this.ChooseUser, this.userService.CurrentUser, this.requestService.codelimit).subscribe(d => { }, er => { })
    this.waitingService.SendMailTeacherToUser(this.userService.CurrentUser, this.ChooseUser, this.ChooseUser.CodeLimit, this.ChooseUser.WaitingID).subscribe(d => {
      // alert("המייל נשלח בהצלחה")
      this.ifClick = true
      this.ifClick2 = false
      this.ifShow = true
      // this.openModal1 = true
      // document.getElementById('openModal1').style.display = 'block'

    }

      , er => {
        alert('המייל אינו נשלח- החיבור אינו תקין')
      })

    this.alreadyCheck = true
    // ========================
    // this.openModal = false
  }
  save(item: Waiting) {
    this.ChooseUser = item;
    this.ifClick = false
    this.ifClick1 = false
    console.log(this.ChooseUser)
    this.openModal = !this.openModal;
    document.getElementById('openModal').style.display = 'block'
    debugger;


  }

  saveThis(item: Useres) {
    this.ifClick2 = true
    this.ifShow = false
    this.ChooseUser = item
    this.sendMail()
    this.openModal1 = true
    document.getElementById('openModal1').style.display = 'block'

  }

  sendMailToLesson() {
    this.ifClick1 = true
    // alert("!נשלח");

    // if (this.ChooseUser.CodeUser == this.userService.CurrentUser.CodeUser) {
    //   alert('בנ"א לא יכול ללמד את עצמו')
    // }
    debugger;
    this.sendMail();
  }

  noLimit() {
    this.nolimit = !this.nolimit;
  }

  getUsers() {
    this.router.navigate(["/getUsers"])
  }
  AddRequest() {
    this.router.navigate(["/Request"])
  }
  MyItem() {
    this.router.navigate(["/MyItem"])
  }
  toListing() {
    this.router.navigate(["/toListing"])
  }
  clalim() {
    this.router.navigate(['/clalim'])
  }
  // addLimit() {
  //   this.limit.NameLimit = this.otherLimit;
  //   this.limit.CodeParentLimit = 0
  //   this.limitService.AddLimit(this.limit).subscribe(d =>{ alert('התחום נוסף בהצלחה') })
  // }


}

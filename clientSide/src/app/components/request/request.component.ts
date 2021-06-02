import { Component, OnInit } from '@angular/core';

import { LimitService } from 'src/app/service/limit.service';
import { Limit } from 'src/app/classes/limit';
import { TimesService } from 'src/app/service/times.service';
import { UserService } from 'src/app/service/user.service';
import { SectorService } from 'src/app/service/sector.service';
import { MinService } from 'src/app/service/min.service';
import { Sector } from 'src/app/classes/sector';
import { Router } from '@angular/router';
import { Useres } from 'src/app/classes/useres';
import { MenuItem } from 'primeng/api';
import { Min } from 'src/app/classes/min';
import { WaitingService } from 'src/app/service/waiting.service';
import { Waiting } from 'src/app/classes/waiting';
import { Time } from '@angular/common';
import { RequestService } from 'src/app/service/request.service';
import { Times } from 'src/app/classes/times';
import { Location } from '@angular/common';

import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { LessonsService } from 'src/app/service/lessons.service';
import { Lessons } from 'src/app/classes/lessons';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  [x: string]: any;

  listLimit: Array<Limit> = new Array<Limit>()
  listRequest: Array<Request> = new Array<Request>();
  listSector: Array<Sector> = new Array<Sector>();
  listWaiting: Array<Waiting> = new Array<Waiting>();

  NamtTime: string;
  NameSector: string;
  IdMin: Min;
  IdTime: Times;
  IdSector: Sector;
  // IdSector: Sector;

  items: MenuItem[] = [];
  codelimit: number;
  sec: Sector[];
  selectedSector: Sector[];
  selectedMin: Min;
  displayModal: boolean;
  displayBasic: boolean;
  visibleSidebar2;
  WaitingN: string;
  user: Useres;
  d: any;
  wait: Waiting = new Waiting();
  limit1: Limit;
  sector1: Sector;
  time1: Time;
  min1: Min;
  mila: number = 3;
  nlimit: any

  selectedMin1: Min;
  selectedMinim: string;

  li: boolean = false

  num1: any;
  numlessens: number;
  numLessonITeach: number;
  listLessons: Array<Lessons> = new Array<Lessons>();


  constructor(public requestService: RequestService, public limitService: LimitService, public timesService: TimesService, public userServicen: UserService, public sectorService: SectorService, public minService: MinService, public router: Router, public lessonsService: LessonsService, public waitingService: WaitingService, private location: Location
  ) { }

  ngOnInit() {
    //  this.get();
    debugger;
    this.get1();
    // this.get2()
    // this.iTeacher()
    this.limitService.getAll(0).subscribe(
      data => {
        debugger;
        this.items = this.ConvertToMenuItem(data)
      }
    )
    this.getWaiting();

  }
  ConvertToMenuItem(data: Limit[]): MenuItem[] {
    let cat: MenuItem[] = [];
    if (data.length == 0)
      return null;
    data.forEach(el => {
      if (el != null) {
        var c = this.limitService.getAll(el.CodeLimit).subscribe(data1 =>
          cat.push({ label: el.NameLimit, automationId: el.CodeLimit, command: (event) => { this.chooselimit(el.CodeLimit) }, items: this.ConvertToMenuItem(data1) }))
      }
    })
    return cat;
  }
  chooselimit(automationId: number) {
    debugger;
    this.li = true;
    this.codelimit = automationId;
    debugger;
    this.limitService.getLimitById(this.codelimit).subscribe(data => { this.nlimit = data.NameLimit })
  }

  //רשימת המגזרים
  get1() {
    this.sectorService.getAll().subscribe(data => this.listSector = data);

  }

  // =======================

  // getCountLessenes() {
  //   this.numlessens = this.listLessons.length;
  // }
  // get2() {
  //   this.lessonsService.getAll(this.userService.CurrentUser.CodeUser).subscribe(data => { debugger; this.listLessons = data, this.getCountLessenes() });

  // }


  // iTeacher() {
  //   this.lessonsService.getLessonITeach(this.userService.CurrentUser.CodeUser).subscribe(data => this.numLessonITeach = data)
  // }

  // ====================

  userCorrect() {
    // numLessonITeach-numlessens
    if (this.numLessonITeach - this.numlessens > 0) {
      alert('othrt')
    }
    debugger;
    this.requestService.codelimit = this.codelimit
    this.requestService.IdMin = this.IdMin;
    this.requestService.IdSector = this.IdSector;
    this.requestService.times = this.IdTime;
    this.router.navigate(["/userCorrect"])

  }

  //רשימת המורים המתאימים ע"פ הבקשות

  openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }

  closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
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

  showModalDialog() {
    this.displayModal = true;
    this.sector1 = this.IdSector;
  }


  showBasicDialog1() {
    this.displayBasic = true;
  }


  showBasicDialog() {
    this.displayBasic = true;
  }

  clalim() {
    this.router.navigate(['/clalim'])
  }

  // AddWaiting() {
  //   debugger;

  //   this.wait.WaitingName = this.WaitingN;
  //   this.wait.UserId = this.userServicen.CurrentUser.CodeUser
  //   this.waitingService.AddWaiting(this.wait).subscribe(data => { this.d = data })
  // }


  getWaiting() {
    debugger;
    this.waitingService.getWaiting().subscribe(data => this.listWaiting = data)
  }
  sec1() {
    debugger;
    this.sector1 = this.IdSector;
    this.min1 = this.IdMin;
    this.sector1;
  }
  goBack() {
    this.location.back();
  }






}

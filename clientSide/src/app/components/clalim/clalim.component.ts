import { Component, OnInit } from '@angular/core';
// import {
//   NgbCalendar, NgbCalendarHebrew, NgbDate, NgbDatepickerI18n, NgbDatepickerI18nHebrew, NgbDateStruct
// } from '@ng-bootstrap/ng-bootstrap'

import { Router } from '@angular/router';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-clalim',
  templateUrl: './clalim.component.html',
  styleUrls: ['./clalim.component.css']
})

export class ClalimComponent implements OnInit {

  name: string
  invalidDates: Array<Date>
  date4: Date
  date14: Date;
  numReply: number
  openModal: boolean = false;
  // model: NgbDateStruct;
  dt: number = 1;
  ifShow: boolean = false
  openModal1: boolean = false
  // dayTemplateData1: Date;


  constructor(public userService: UserService, public router: Router, public recommendationService: RecommendationService
    // public calendar: NgbCalendar, public i18n: NgbDatepickerI18n
  ) {
    // this.dayTemplateData = this.dayTemplateData.bind(this);
  }

  ngOnInit(): void {

    this.name = this.userService.CurrentUser.FName + ' ' + this.userService.CurrentUser.LName
    this.getCountReply()

  }

  getCountReply() {
    this.recommendationService.getCountReply(this.userService.CurrentUser.CodeUser).subscribe(data => { this.numReply = data; this.openn() })
  }

  openn() {
    if (this.numReply > 3 && this.ifShow == false) {
      setTimeout(() => {
        this.ifShow = true
        this.openModal = true
        document.getElementById('openModal').style.display = 'block'

        // alert('הזהר- מידי הרבה אנשים הגיבו עליך לרעה')
      }, 2000)
    }
  }
  openMod() {
    this.openModal = !this.openModal;
    document.getElementById('openModal').style.display = 'block'
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

  // dayTemplateData(date: NgbDate) {
  //   return {
  //     gregorian: (this.calendar as NgbCalendarHebrew).toGregorian(date)
  //   };
  // }

  // selectToday() {
  //   this.model = this.calendar.getToday();
  // }


}

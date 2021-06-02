import { Component, OnInit, ViewChild } from '@angular/core';
import { Lessons } from 'src/app/classes/lessons';
import { Useres } from 'src/app/classes/useres';
import { LessonsService } from 'src/app/service/lessons.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { from } from 'rxjs';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendar } from 'primeng/fullcalendar/public_api';
import { EventService } from 'src/app/service/event.service';

// =============



@Component({
  selector: 'app-ilearn',
  templateUrl: './ilearn.component.html',
  styleUrls: ['./ilearn.component.css']
})


export class ILearnComponent implements OnInit {

  lessonn: any[];

  options: any;
  val1: string;
  val2: string = 'Option 2';
  selectedValue: string;
  events: any[];


  id: number;
  user: Useres;
  numlessens: number
  displayModal: boolean;
  displayBasic: boolean;
  num1: any;

  numl: any;
  text: string;
  text1: string;
  // --------------------
  headersOfILearn: any[];
  listLessons: Array<Lessons> = new Array<Lessons>();
  first = 0;
  rows = 8;
  exportColumns: any[];

  numLessonITeach: number;
  // d:JSON=JSON["id"][1]["start"][20-08-2020]
  "theTeam":[{"id":"1","title":"sari","start":"20-08-2020"},{"id":"2","title":"choen","start":"26-08-2020"}]

  

  constructor(public lessonsService: LessonsService, public userService: UserService, public router: Router, public eventService: EventService) { }



  ngOnInit() {debugger;






    

// -----------------------------------
    this.lessonsService.getEvents().then(events => {this.events = events;});
        
    this.options = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultDate: '2017-02-01',
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true
    };
    this.lessonsService.addEvent([3]["2017-02-19"])


    this.getLessonITeach();
    this.user = this.userService.CurrentUser;
    this.get1();
    this.headersOfILearn = [
      { field: 'CodeTeacher', header: 'שם המורה המלמדת' },
      { field: 'CodeLimit', header: 'שם השיעור הנלמד' },
      { field: 'DateLesson', header: 'תאריך השיעור' }

    ];
    this.num1 = this.lessonsService.getNumLesson()


    
  
  
  }
  getCountLessenes() {
    this.numlessens = this.listLessons.length;
  }
  get1() {
    this.lessonsService.getAll(this.userService.CurrentUser.CodeUser).subscribe(data => { debugger; this.listLessons = data, this.getCountLessenes() });

  }
  getLessonITeach() {
    this.lessonsService.getLessonITeach(this.userService.CurrentUser.CodeUser).subscribe(data => this.numLessonITeach = data)
  }

  INotLearn() {
    debugger;
    this.router.navigate(["/INotLearn"])
  }
  showModalDialog() {
    this.displayModal = true;
  }
  // exportPdf() {
  //   import('jspdf'+'').then(jsPDF => {
  //       import('jspdf-autotable'+'').then(x => {
  //           const doc = new jsPDF.default(0,0);
  //           doc.autoTable(this.exportColumns, this.listLessons);
  //           doc.save('primengTable.pdf');
  //       })
  //   })
  // }
  showBasicDialog() {
    this.displayBasic = true;
  }

  



  // getNumLesson(){
  //    this.lessonsService.getNumLesson().subscribe(data=>this.numl=data);
  // }
}

 
    





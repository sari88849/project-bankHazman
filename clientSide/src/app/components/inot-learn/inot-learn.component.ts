import { Component, OnInit } from '@angular/core';
import { LessonsService } from 'src/app/service/lessons.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { Lessons } from 'src/app/classes/lessons';
@Component({
  selector: 'app-inot-learn',
  templateUrl: './inot-learn.component.html',
  styleUrls: ['./inot-learn.component.css']
})
export class INotLearnComponent implements OnInit {
  listLessons:Array<Lessons>=new Array<Lessons>();
  numlessens: number;
  constructor(public lessonsService:LessonsService, public userService:UserService, public router:Router) { }
  ngOnInit(): void {debugger;
    // this.get1();
  }
  // get1(){
  //   this.lessonsService.getAll2(this.userService.CurrentUser.CodeUser).subscribe(data=>{this.listLessons=data,this.getCountLessenes()});
  //   debugger;
  // }

  ILearn(){
    this.router.navigate(["/ILearn"])
  }
  getCountLessenes(){
    this.numlessens=this.listLessons.length;
  }
}

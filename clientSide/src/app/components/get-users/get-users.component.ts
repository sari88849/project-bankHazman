import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Useres } from 'src/app/classes/useres';
import { SortEvent } from 'primeng/api/sortevent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  headersOfUsers: any[];
  listU:Array<Useres>=new Array<Useres>();
  first = 0;

  rows = 8;
  
  constructor(private userService:UserService, public router:Router) { }

  ngOnInit() {
    this.getAll();


        this.headersOfUsers = [
           
           
            { field: 'Phone', header: 'טלפון' },
            { field: 'LName', header: 'שם משפחה' },
            { field: 'FName', header: 'שם פרטי' }


        ];
        this.userService.getUserimMedium().then(listU => this.listU =listU);






  }

  getAll(){debugger;
  this.userService.getAll().subscribe(data=> this.listU=data)
  }

  limit(){
    
  }





  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.first === (this.listU.length - this.rows);
}

isFirstPage(): boolean {
    return this.first === 0;
}



customSort(event: SortEvent) {
  event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
          result = -1;
      else if (value1 != null && value2 == null)
          result = 1;
      else if (value1 == null && value2 == null)
          result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
          result = value1.localeCompare(value2);
      else
          result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
  } )}

  getUsers(){
    this.router.navigate(["/getUsers"])
  }
  toListing(){
    this.router.navigate(["/toListing"])
  }
  MyItem(){
    this.router.navigate(["/MyItem"])
  }
  AddRequest(){
    this.router.navigate(["/AddRequest"])
  }
  openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  
  closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }


}

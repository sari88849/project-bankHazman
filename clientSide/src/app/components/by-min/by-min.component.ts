import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Useres } from 'src/app/classes/useres';

@Component({
  selector: 'app-by-min',
  templateUrl: './by-min.component.html',
  styleUrls: ['./by-min.component.css']
})
export class ByMinComponent implements OnInit {
  data: any;
  listUser: Array<Useres> = new Array<Useres>();


  min2: number;
  min1: number;

  options = {
    title: {
      display: true,
      text: 'My Title',
      fontSize: 16
    },
    legend: {
      position: 'bottom'
    }
  }

  constructor(public userService: UserService) { }

  ngOnInit() {
    //this.getMin1();
    this.getAll();


  }

  filldata() {
    this.data = {
      labels: ['בנות', 'בנים'],
      datasets: [
        {
          data: [this.min2 - this.min1, this.min1],
          // data: [300,  100],

          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }
  getMin1() {
    debugger;
    this.userService.getMin1(1).subscribe(data => { this.min1 = data; this.filldata(); },
      err => { console.log(err) });
  }
  getAll() {
    this.userService.getAll().subscribe(data => { debugger; this.listUser = data; this.getMin(); this.getMin1() });
  }

  getMin() {
    this.min2 = this.listUser.length;
  }

}

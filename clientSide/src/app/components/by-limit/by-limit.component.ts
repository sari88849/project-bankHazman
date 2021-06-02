import { Component, OnInit } from '@angular/core';
import { LimitService } from 'src/app/service/limit.service';
import { Limit } from 'src/app/classes/limit';
import { Data } from '@angular/router';
import { Chart } from 'chart.js';
import { tr } from 'date-fns/locale';


@Component({
  selector: 'app-by-limit',
  templateUrl: './by-limit.component.html',
  styleUrls: ['./by-limit.component.css']
})
export class ByLimitComponent implements OnInit {
  // data: any;
  // listLimit: Array<Limit> = new Array<Limit>();
  // lim: Limit;
  // limm: string
  // numLim: any = '';
  // newLim: Limit[];

  // constructor(public limitService: LimitService) { }


  // ngOnInit() {
  //   debugger;
  //   this.filldata();
  //   this.getAll();
  //   this.getNameLimit();

  // }

  // filldata() {
  //   debugger;
  //   this.data = {
  //     datasets: [{
  //       data: [this.limitService.getAll(0)],
  //       backgroundColor: [
  //         "#FF6384",
  //         "#4BC0C0",
  //         "#FFCE56",
  //         "#E7E9ED",
  //         "#36A2EB"
  //       ],
  //       label: 'My dataset'
  //     }],
  //     labels: [this.limitService.listLimit.values()
  //       // this.lim.NameLimit
  //       // "Red",
  //       // "Green",
  //       // "Yellow",
  //       // "Grey",
  //       // "Blue"
  //     ]
  //   }
  // };

  // getNameLimit() {
  //   this.limitService.limitToFather(0).subscribe(data => { this.numLim = data.NameLimit, this.newL(this.numLim), alert(this.numLim) },
  //     err => { console.log(err) });

  //   // this.userService.getUserById(this.teacherId).subscribe(data => { this.usert = data.FName + ' ' + data.LName })
  //   // 

  // }

  // newL(numLim) {
  //   debugger;
  //   this.newLim.push(numLim);
  //   console.log(numLim)
  // }

  // getAll() {
  //   debugger;
  //   this.limitService.getAll(0).subscribe(a => { this.numLim = a },
  //     err => { console.log(err) });
  // }





  // ==============================
  // data: Data[];
  // namelimit = [];
  // Run = [];
  // chart = [];
  // constructor(public l: LimitService) { }
  // ngOnInit() {
  //   debugger
  //   this.l.getAll(0).subscribe((result: Data[]) => {
  //     result.forEach(x => {
  //       this.namelimit.push(x.NameLimit);
  //       this.Run.push(x.CodeLimit);
  //     });
  //     this
  //     this.chart = new Chart('canvas', {
  //       type: 'doughnut',

  //       data: {
  //         labels: this.namelimit,

  //         datasets: [
  //           {
  //             data: this.Run,
  //             borderColor: '#3cba9f',
  //             backgroundColor: [
  //               "#3cb371",
  //               "#0000FF",
  //               "#9966FF",
  //               "#4C4CFF",
  //               "#00FFFF",
  //               "#f990a7",
  //               "#aad2ed",
  //               "#FF00FF",
  //               "Blue",
  //               "Red",
  //               "Blue"
  //             ],
  //             fill: true
  //           }
  //         ]
  //       },
  //       options: {
  //         legend: {
  //           //display color
  //           display: true
  //         },
  //         scales: {
  //           xAxes: [{
  //             //display word למטה
  //             display: true
  //           }],
  //           yAxes: [{
  //             display: true
  //           }],
  //         }
  //       }
  //     });
  //   });
  // }

  data: Data[];
  Player = [];
  Run = [];
  Linechart = [];
  hewmany = [{ name: '', num: 0 }];
  constructor(public l: LimitService) { }

  ngOnInit() {

    this.l.getLimitChild().subscribe((result: Data[]) => {
      result.forEach(x => {
        this.Player.push(x.limit);
        this.Run.push(x.count);
      });
      this.Linechart = new Chart('canvas', {
        type: 'polarArea',
        data: {
          labels: this.Player,

          datasets: [
            {
              data: this.Run,
              borderColor: '#3cb371',
              backgroundColor: [
                "yellow",
                "violet",
                "springgreen",
                "cadetblue",
                "salmon",
                "#9966FF",
                "#4C4CFF",
                "#00FFFF",
                "#f990a7",
                "#aad2ed",
                "#FF00FF",
                "#3cb371",
                "Blue",
                "Red",
                "Blue"
              ],
            }
          ],
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }],
          }
        }
      });
    });
  }
}







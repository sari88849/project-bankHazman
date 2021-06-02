import { Component, OnInit } from '@angular/core';
import { LimitService } from 'src/app/service/limit.service';
import { UserService } from 'src/app/service/user.service';
import { Useres } from 'src/app/classes/useres';
import { Router } from '@angular/router';


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    min1: number;
    min2: number;
    data: any;
    data6:any;
    tada:any;
    data2: any;
    dataa:any;
    visibleSidebar2;
    listMin1: Array<Useres> = new Array<Useres>();
    listMin2: Array<Useres> = new Array<Useres>();

    listUser: Array<Useres> = new Array<Useres>();

    isAbout:boolean=true;
    isLearn:boolean=true;

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


    constructor(public userService: UserService, public router:Router) {

        this.data6 = {
            datasets: [{
                data6: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        }
    

       
    }
    ngOnInit() {
      //  this.byMin();
        this.getAll();

        this.getMin1();
        // this.getMin2();
        this.data2 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data2: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data2: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    
    }
    filldata() {
        this.data = {
            labels: ['בנות', 'בנים'],
            datasets: [
                {
                    data: [this.min2-this.min1, this.min1],
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
        this.userService.getAll().subscribe(data=>{debugger; this.listUser=data,this.getMin()});
    }

    getMin(){
        this.min2=this.listUser.length;
    }  
          
    byMin(){
        this.router.navigate(["/byMin"]);
    }

}

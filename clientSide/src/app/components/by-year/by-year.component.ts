import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-year',
  templateUrl: './by-year.component.html',
  styleUrls: ['./by-year.component.css']
})
export class ByYearComponent implements OnInit {
  data:any;

  constructor() { }

  ngOnInit() {
    this.filldata();
  
  
  }
  filldata() {debugger;
    this.data = {
      labels: [ '2016', '2017', '2018', '2019', '2020'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 42]
          },
          // {
          //     label: 'My Second dataset',
          //     backgroundColor: '#9CCC65',
          //     borderColor: '#7CB342',
          //     data: [28, 48, 40, 19, 86, 27, 90]
          // }
      ]
  }
};

}

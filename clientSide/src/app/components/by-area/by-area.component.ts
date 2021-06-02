import { Component, OnInit } from '@angular/core';
import { Useres } from 'src/app/classes/useres';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-by-area',
  templateUrl: './by-area.component.html',
  styleUrls: ['./by-area.component.css']
})
export class ByAreaComponent implements OnInit {
  lat: number = 31.768319;
  lng: number = 35.21371;

  listU: Array<Useres> = new Array<Useres>();

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    debugger;
    this.userService.getAll().subscribe(data => this.listU = data)
  }

}

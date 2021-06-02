import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Useres } from 'src/app/classes/useres'
import { Router } from '@angular/router';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { Recommendation } from 'src/app/classes/recommendation';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listUser: Array<Useres> = new Array<Useres>();
  name: string;
  items2: MenuItem[];

  items3: MenuItem[];

  activeItem: MenuItem;



  listRecommendation: Array<Recommendation> = new Array<Recommendation>();














  constructor(private userService: UserService, private router: Router, public recommendationService: RecommendationService) { }

  ngOnInit() {
    this.getAll();
    this.name = "משתמש: " + this.userService.CurrentUser.FName + " " + this.userService.CurrentUser.LName;

    this.items2 = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

  }
  getAll() {
    this.userService.getAll().subscribe(data => { debugger; this.listUser = data });
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
  clalim() {
    this.router.navigate(['/clalim'])
  }






}

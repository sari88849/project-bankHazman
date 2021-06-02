import { Component, OnInit } from '@angular/core';
import { Useres } from 'src/app/classes/useres';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
// import swal from 'sweetalert';
// import * as swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

// import swal, { SweetAlert } from "./core";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number = 31.768319;
  lng: number = 35.21371;
  name: string = "";
  pass: string = "";
  listU: Array<Useres> = new Array<Useres>();
  displayModal: boolean;
  displayBasic: boolean;

  visibleSidebar2;
  passForget: string = '';
  clickForget: boolean = false;

  openModal: boolean = false
  text: string
  multiJobs: boolean
  UserCode: string;
  UserPassword: string;
  IsFailed: boolean;
  IsShow: boolean


  constructor(private userService: UserService, private router: Router) { }

  // listU=userService.getAll()


  ngOnInit() {

  };

  show() {
    this.openModal = true
  }

  checkUser() {

    var u = new Useres(0, this.name.trim(), "", this.pass.trim(), null, '', '', 0, 0, 0, 0, 0, 0, 0)
    this.userService.GetUsereByIdAndpass(u).subscribe(data => {
      debugger;
      if (data != null) {
        this.userService.CurrentUser = data;
        // alert(this.userService.CurrentUser.FName)


        this.router.navigate(["/clalim"])


      }
      else {
        alert("לא קיים משתמש עם פרטים אלו")
      }
    }),
      err => { alert("error!!!") };
    // this.forget();
  }
  AddUser() {
    this.router.navigate(["/AddUser"])
  }
  showModalDialog() {
    this.displayModal = true;
  }


  about() {
    this.router.navigate(["/about"])
  }

  forget() {
    debugger
    this.clickForget = !this.clickForget;
    this.router.navigate(["/forget"])
  }
  as() {
    alert('click me!!!')
  }

  alert() {
    // swal("Good job!", "You clicked the button!", "success");
    // swal({
    //   title: "Are you sure?",
    //   text: "Once deleted, you will not be able to recover this imaginary file!",
    //   icon: "warning",
    //   // buttons: true,
    //   dangerMode: true,
    // })
    //   .then((willDelete) => {
    //     if (willDelete) {
    //       swal("Poof! Your imaginary file has been deleted!", {
    //         icon: "success",
    //       });
    //     } else {
    //       swal("Your imaginary file is safe!");
    //     }
    //   });



  }
  ShowPass() {
    debugger
    this.IsShow = !this.IsShow
    let d = document.getElementsByName("Password")[0]

    if (d)
      d.setAttribute("type", "text")
  }
  CoverPass() {
    debugger
    this.IsShow = !this.IsShow
    let d = document.getElementsByName("Password")[0]
    if (d)
      d.setAttribute("type", "password")
  }


}

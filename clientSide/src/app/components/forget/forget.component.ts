import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Useres } from 'src/app/classes/useres';
import { Message } from 'primeng/api';



@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  em: string;
  e: boolean;
  msgs: Message[] = [];
  lat: number = 0;
  lng: number = -180;


  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.initMap()
  }
  getUserByDateAndMail() {
    debugger;
    // let u=this.em;
    var u = new Useres(0, '', '', '', null, this.em.trim(), '', 0, 0, 0, 0, 0, 0, 0)
    this.userService.getUserByDateAndMail(u).subscribe(data => {
      if (data != null) {
        this.userService.forgetUser = data;
        alert(this.userService.forgetUser.FName)
      }
      else {
        alert("לא קיים משתמש עם פרטים אלו")
      }
    })
    this.getRandomString(8);
  }
  // 0546987257
  // ארוח אצל הכהנים


  //פונקצייה שיוצרת קוד רנדומלי חדש
  getRandomString(length) {
    debugger;
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    this.SendMail(result);
    return result;

  }

  SendMail(result: string) {
    debugger;
    this.userService.SendMail(result, this.userService.forgetUser).subscribe(d => {
      alert("הסיסמא נשלחה בהצלחה")
    }

      , er => {
        alert('המייל אינו נשלח- החיבור אינו תקין')
      })

    this.update(result)
  }
  update(result: string) {
    debugger;
    this.userService.forgetUser.Password = result;
    this.userService.update(this.userService.forgetUser).subscribe(data => { this.e = data })
  }
  a() { }
  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
  }

  initMap(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 3,
        center: { lat: 0, lng: -180 },
        mapTypeId: "terrain",
      }
    );

    const flightPlanCoordinates = [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
    ];
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    flightPath.setMap(map);
  }

}

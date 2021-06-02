import { Component, OnInit, ViewChild } from '@angular/core';
import { Useres, Useres1 } from 'src/app/classes/useres';
import { UserService } from 'src/app/service/user.service';
import { RequestService } from 'src/app/service/request.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { GMapModule } from 'primeng/gmap';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { Recommendation } from 'src/app/classes/recommendation';
import { MassageService } from 'src/app/service/massage.service';
import { SelectItem } from 'primeng/api/selectitem';
import { Limit } from 'src/app/classes/limit';
import { SaveLesson } from 'src/app/classes/saveLesson';
import { Waiting } from 'src/app/classes/waiting';
import { WaitingService } from 'src/app/service/waiting.service';
import { zhCN } from 'date-fns/locale';
import { LimitToTeacher } from 'src/app/classes/limit-to-teacher';
import { LimitToTeacherService } from 'src/app/service/limit-to-teacher.service';
import { interval } from 'rxjs';
import { LatLng, LatLngLiteral } from 'ngx-google-places-autocomplete/objects/latLng';
import { ThirdPartyDraggable } from '@fullcalendar/interaction';
'./show-api/show-api.component';
// import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
// import swal from 'sweetalert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-correct',
  templateUrl: './user-correct.component.html',
  styleUrls: ['./user-correct.component.css']
})
export class UserCorrectComponent implements OnInit {

  listUsers: Array<Useres> = new Array<Useres>();
  listRecommendation: Array<Recommendation> = new Array<Recommendation>()
  value: number = 0;

  selectedUser: Useres;

  displayDialog: boolean;
  listSaveLesson: Array<SaveLesson> = new Array<SaveLesson>();

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;
  un: boolean = false;
  d: any
  openModal: boolean = false


  overlays: any[];
  options: { center: { lat: number; lng: number; }; zoom: number; };


  full: boolean;
  lat: number = 31.768319;
  lng: number = 35.21371;
  // lat: number;
  // lng: number;
  usere: Useres
  userCorrent: Useres;
  a: number;
  userSave: Waiting = new Waiting();
  listLimitToTeacher: Array<LimitToTeacher> = new Array<LimitToTeacher>();
  li: any
  sendMail: boolean = false
  ifShow: boolean = true
  // @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  value1: any
  ChooseUser: Useres
  constructor(public userService: UserService, public requestService: RequestService, public recommendationService: RecommendationService, public massageService: MassageService, public waitingService: WaitingService, public limitToTeacherService: LimitToTeacherService, public router: Router) { }

  ngOnInit() {
    // document.getElementById('loading').style.display = 'none';
    setTimeout(() => {
      this.ifShow = false
    }, 3000)
    debugger;
    this.userCorrent = this.userService.CurrentUser
    this.userCorrent.AddressX
    // this.lat = this.userService.CurrentUser.AddressX;
    // this.lng = this.userService.CurrentUser.AddressY;
    this.options = {
      center: { lat: 31.768319, lng: 35.21371 },
      zoom: 12
    }



    this.getAll();

    // this.li = this.getRecommendation()

    // this.RecommendationText(this.usere);
    // this.sortListByDistance();
    for (let i = 0; i < this.listUsers.length; i++) {
      console.log("!!!!!!!!!!!!!!!!!", google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.listUsers[i].AddressX, this.listUsers[i].AddressY), new google.maps.LatLng(this.userService.CurrentUser.AddressX, this.userService.CurrentUser.AddressY))
      );

    }

  }

  initMap1() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 24.886, lng: -70.268 },
      mapTypeId: "terrain",
    });
    // Define the LatLng coordinates for the polygon's path.
    const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },

    ];
    // Construct the polygon.
    const bermudaTriangle = new google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });
    bermudaTriangle.setMap(map);
  }
  //פוקצייה שמקבלת את הערכים שהמשתמש בחר- הולכת לסרבר ושם בודקת אילו אנשים עונים על הקריטריונים
  getAll() {
    this.userService.getUserIsCorrect(this.userService.CurrentUser.CodeUser, this.requestService.IdSector.IdSector, this.requestService.IdMin.IdMin, this.requestService.times.IdTime, this.requestService.codelimit).
      //היא מחזירה מהסרבר את המורים המתאימים
      //שנמצאים בתוך המשתנה==listUsers
      //וכן היא שולחת לפונקצייה שנקראת 
      //sortListByDistance
      //שממינת את המורים לפי מרחק
      subscribe(data => { this.listUsers = data, this.RecommendationText(data); this.sortListByDistance() });
  }

  RecommendationText(list: Useres[]) {
    debugger
    list.forEach(element => {
      this.userService.RecommendationText(element.CodeUser, this.requestService.codelimit).subscribe(data => element.listRecommendation = data)
    });
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);

    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }


  SendMail() {
    debugger;
    // this.requestService.SendMail(this.ChooseUser, this.userService.CurrentUser, this.requestService.codelimit).subscribe(d => { }, er => { })
    this.requestService.SendMail(this.ChooseUser, this.userService.CurrentUser, this.requestService.codelimit).subscribe(d => {
      // swal("!המייל נשלח בהצלחה", "עליך לחכות לתשובה מהמורה", "success");
      this.sendMail = true
      // alert("המייל נשלח בהצלחה")
      setTimeout(() => {
        this.router.navigate(["/clalim"])
      }, 10000)


    }

      , er => {
        alert('המייל אינו נשלח- החיבור אינו תקין')
      })


  }
  save(item: Useres) {
    debugger;
    this.ChooseUser = item;
    if (item.CodeUser == this.userService.CurrentUser.CodeUser) {
      alert('בנ"א לא יכול ללמד את עצמו')
    }
    debugger;
  }

  public handleAddressChange(address: Address) {
    debugger;
    console.log("chang" + address.geometry.location.lat());
    console.log("chang" + address.geometry.location.lng());

  }
  handleMapClick(event) {
    this.lat = event.latLng.lat();
    this.lng = event.latLng.lng();
    console.log(this.lat);
    console.log(this.lng);
  }



  null() {
    debugger;
    console.log("its null")
  }



  selectCar(event: Event, listUsers: Useres) {
    this.selectedUser = listUsers;
    this.displayDialog = true;
    event.preventDefault();
  }



  onDialogHide() {
    this.selectedUser = null;
  }


  //הקצאת מערך עזר חדש
  listezer: Useres1[]
  sortListByDistance() {
    debugger
    //אתחול המערך
    this.listezer = new Array();
    //לולאה שעוברת על כל המורים המתאימים
    for (let i = 0; i < this.listUsers.length; i++) {
      console.log(this.listUsers[i].FName);
      //כל איבר במערך המורים במתאימים מועתק למערך החדש
      this.listezer.push(this.listUsers[i])
      //dist=מרחק
      //תחביר של גוגל מאפ- שדוחף למערך החדש את הכתובות של המערך עליו הוא עובר
      this.listezer[i].dist = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.listUsers[i].AddressX, this.listUsers[i].AddressY), new google.maps.LatLng(this.userService.CurrentUser.AddressX, this.userService.CurrentUser.AddressY))
      //path==בודק מרחק בין 2 נקודות
      this.listezer[i].path = [
        [
          //הנקודה הראשונה- המורה 
          {
            "lat": this.listezer[i].AddressX,
            "lng": this.listezer[i].AddressY,
          },
          //הנקודה השנייה- המשתמש- התלמיד
          {
            "lat": this.userService.CurrentUser.AddressX,
            "lng": this.userService.CurrentUser.AddressY
          }
        ]
      ];

      debugger
    }

    //פונקצייה שממינת את מערך המורים המתאימים- ומחזירה את המורים עפ"י מרחק מהקצר לארוך
    this.listezer.sort(function (a, b) {
      console.log("a", google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(a.AddressX, a.AddressY), new google.maps.LatLng(b.AddressX, b.AddressY)));
      return a.dist - b.dist;
    });
    this.listUsers = new Array();
    for (let i = 0; i < this.listezer.length; i++) {
      this.listUsers.push(this.listezer[i]);
      console.log(this.listUsers[i].FName);

    }
  }
  saveLesson() {
    debugger;
    // this.userSave.WaitingID = 3;

    this.userSave.CodeUser = this.userService.CurrentUser.CodeUser;
    this.userSave.CodeLimit = this.requestService.codelimit;
    this.userSave.CodeTime = this.requestService.times.IdTime;
    this.userSave.CodeMin = this.requestService.IdMin.IdMin;
    this.userSave.CodeSector = this.requestService.IdSector.IdSector
    this.waitingService.AddWaiting(this.userSave).subscribe(data => {
      this.d = data,
        this.openModal = true
      document.getElementById('openModal').style.display = 'block'
    });
  }

  paths: Array<Array<LatLng | LatLngLiteral>> = [
    [
      {
        "lat": 33.33,
        "lng": 33.33,
      },
      {
        "lat": 34.031,
        "lng": 34.031
      }
    ]
  ];

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

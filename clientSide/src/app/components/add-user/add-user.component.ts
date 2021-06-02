import { Component, OnInit } from '@angular/core';
import { Useres } from 'src/app/classes/useres';
import { UserService } from 'src/app/service/user.service';
import { HttpClient } from '@angular/common/http';
import { Cities } from 'src/app/classes/cities';
import { CitiesService } from 'src/app/service/cities.service';
import { StreetsService } from 'src/app/service/streets.service';
import { MinService } from 'src/app/service/min.service';
import { Streets } from 'src/app/classes/streets';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { GMapModule } from 'primeng/gmap';
import { SectorService } from 'src/app/service/sector.service';
import { MinToLearnService } from 'src/app/service/min-to-learn.service';
import { Sector } from 'src/app/classes/sector';
import { MenuItem } from 'primeng/api/menuitem';
import { ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { InputSwitchModule } from 'primeng/inputswitch';
import { LimitService } from 'src/app/service/limit.service';
import { Limit } from 'src/app/classes/limit'
import { Router } from '@angular/router';
import { isThursday } from 'date-fns';

import { ListboxModule } from 'primeng/listbox';
import { LimitToTeacherService } from '../../service/limit-to-teacher.service'
import { TimesService } from 'src/app/service/times.service';
import { Time } from '@angular/common';
import { TimeToUser } from 'src/app/classes/timeToUser';
import { Min } from 'src/app/classes/min';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [MessageService],
  styles: [
    ` :host ::ng-deep .ui-listbox {
      width: 20em;
    }
  `],
})
export class AddUserComponent implements OnInit {

  // lat:number;
  // lng:number;
  mode = "WALKING"
  ifMarker = true;
  user: Useres = new Useres();
  listUs: Array<Useres> = new Array<Useres>();
  listStreets: Array<Streets> = new Array<Streets>();
  value: number;
  listSector: Array<Sector> = new Array<Sector>()
  d: Useres
  options: { center: { lat: number; lng: number; }; zoom: number; };

  d1: boolean
  checked1: boolean = false;
  checked2: boolean = true;
  itemsChildren: MenuItem[];
  items: MenuItem[] = [];
  items1: MenuItem[] = [];
  limit: Limit[];
  codelimit: number;
  open: boolean;;
  codeFatherLimit: number = 0;
  nameLimitNew: string = " ";
  displayBasic: boolean;
  lim: Limit;
  ite: MenuItem[];
  date12: Date;
  selectedPosition: any;
  infoWindow: any;
  toshowitem = true
  selectedLimit: Limit
  limList: Limit[];
  timeSave: TimeToUser
  sector1: Sector
  usermin: Min
  origin: any
  destination: any

  listU: Array<Useres> = new Array<Useres>();
  user: Useres;
  visibleSidebar2;
  value: number = 0;
  listSector: Array<Sector> = new Array<Sector>();


  overlays: any[];

  lat: number = 31.768319;
  lng: number = 35.21371;
  IdMin: Min;
  IdSector: Sector;

  e: boolean;
  markerTitle: string;
  selectedPosition: any;

  dialogVisible: boolean;
  dialogVisible: boolean;

  infoWindow: any;
  draggable: boolean;
  min1: Min;
  min2: string;
  sec: string;
  mi: Min;
  name: string
  openModal: boolean = false

  constructor(public userService: UserService, public messageService: MessageService,
    public http: HttpClient, public router: Router, public limitToTeacherService: LimitToTeacherService,
    public streetsService: StreetsService, public minService: MinService, public limitService: LimitService,
    public minToLearnService: MinToLearnService, public sectorService: SectorService, public timesService: TimesService) { }

  ngOnInit() {
    this.limList = [
      { CodeLimit: -1, NameLimit: "רשימת התחומים שלי", CodeParentLimit: -1 }
    ]


    this.getDirection2("חזון איש")
    this.getDirection()
    this.getDirection1()


    this.getSector();
    this.options = {
      center: { lat: 31.768319, lng: 35.21371 },
      zoom: 12
    }
    this.limitService.getAll(0).subscribe(
      data => {
        debugger;
        this.items = this.ConvertToMenuItem(data, 0)
      }
    )
  }


  ConvertToMenuItem(data: Limit[], code: number): MenuItem[] {
    debugger
    let cat: MenuItem[] = [];
    if (code == null)
      return null;
    if (data.length == 0) {
      this.itemsChildren = [];
      this.itemsChildren.push({ label: "להוספת תחום לא קיים", automationId: code, command: (event) => { this.chooseAddLimit(code) }, items: this.ConvertToMenuItem(this.limit, null) })
      return this.itemsChildren;
    }
    data.forEach(el => {
      if (el != null) {
        var c = this.limitService.getAll(el.CodeLimit).subscribe(data1 =>
          //this.itemchildren
          cat.push({ label: el.NameLimit, automationId: el.CodeLimit, command: (event) => { this.chooselimit(el.CodeLimit) }, items: this.ConvertToMenuItem(data1, el.CodeLimit) })
        )
      }
    })
    cat.push({ label: "להוספת תחום לא קיים", automationId: code, command: (event) => { this.chooseAddLimit(code) } })
    return cat;
  }
  AddUser() {
    debugger;
    this.toshowitem = !this.toshowitem
    this.user.AddressX = this.lat;
    this.user.AddressY = this.lng;
    this.user.CodeSector = this.sector1.IdSector
    this.user.Min = this.usermin.IdMin
    //אולי צריך לעשות גם קוד משתמש בטבלה הזאת או לשמור בצורה כזאת מסובכנת....!להלן
    //להוסיף אובייקט של דיספליי שמחזיר את הקוד שיצר ולהכניס אותו למשתמש


    this.userService.AddUser(this.user).subscribe(data => { })

  }

  chooselimit(automationId: number) {
    debugger;
    this.codelimit = automationId;
    this.limitService.getLimitById(this.codelimit).subscribe(data => { debugger; this.limList = [...this.limList, { CodeLimit: data.CodeLimit, CodeParentLimit: data.CodeParentLimit, NameLimit: data.NameLimit }] },
      err => { debugger })

  }
  del() {
    alert(this.selectedLimit.CodeLimit)
    this.limList = this.limList.filter(items => items != this.selectedLimit)
  }
  addLimitToTeacher() {
    debugger
    this.name = this.user.FName + " " + this.user.LName
    var u = new Useres(0, this.name.trim(), "", this.user.Password.trim(), null, '', '', 0, 0, 0, 0, 0, 0, 0)
    this.userService.GetUsereByIdAndpass(u).subscribe(dat => {
      this.d = dat
      this.limList.forEach(element => {
        if (element.CodeLimit >= 0) {
          this.limitToTeacherService.AddLimitToTeacher({ CodeLimit: element.CodeLimit, CodeTeacher: this.d.CodeUser, TryYear: 5 }).subscribe(data => { },

          )
        }
      });
      this.openModal = true,
        document.getElementById('openModal').style.display = 'block'
    })

  }


  chooseAddLimit(codeF: number) {
    debugger;
    //לשמור את הקוד בשביל הקוד אב
    this.codeFatherLimit = codeF;
    //לפתוח משו כזה כמו בפתיחה שיוכלו לכתוב שם את השם קטגוריה
    this.displayBasic = true;
    //להפוך משתנה בוליאני לפעיל ואז להציג את המסאג הנל עם כפתור אישור

  }
  AddLimit() {
    debugger;
    this.displayBasic = false;
    //לקרא לפונקציה מהסרוויס ולהוסיף
    this.lim = new Limit();
    this.lim.CodeParentLimit = this.codeFatherLimit;
    this.lim.NameLimit = this.nameLimitNew;
    this.limitService.AddLimit(this.lim).subscribe(data => { this.d1 = data });
    //לעשות עוד פעם שליפה לקטגוריות -רענון
    this.limitService.getAll(0).subscribe(
      data => {
        debugger;
        this.items = this.ConvertToMenuItem(data, 0)

      }
    )
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

  home() {
    this.router.navigate(['/home'])
  }



  getSector() {
    debugger;
    this.sectorService.getAll().subscribe(data => this.listSector = data); { debugger };
  }

  zoomIn(map) {
    map.setZoom(map.getZoom() + 1);
  }

  zoomOut(map) {
    map.setZoom(map.getZoom() - 1);
  }
  openAddLimit() {
    debugger;
    this.open = true;
  }

  getDirection() {
    this.origin = { lat: 31.768319, lng: 35.21371 }
    this.destination = { lat: 31.76859, lng: 35.21333 }

    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
  }


  getDirection1() {
    this.origin = { lat1: 24.799448, lng1: 120.979021 };
    this.destination = { lat1: 24.799524, lng1: 120.975017 }
  }

  // -------------------------------------------------


  getDirection2(shelterAddress: string) {
    this.ifMarker = false;
    this.origin = { lat: this.lat, lng: this.lng };
    this.destination = shelterAddress;
  }

  onMouseOver(infoWindow, gm) {

    if (gm.lastOpen != null) {
      gm.lastOpen.close();

    }

  }

  onMouseOut(infoWindow, gm) {

    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;

    infoWindow.close();
  }



  handleMapClick1(event) {
    this.dialogVisible = true;
    this.selectedPosition = event.latLng;
  }

  handleOverlayClick(event) {
    let isMarker = event.overlay.getTitle != undefined;

    if (isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());
    }
  }

  closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }

  get1() {
    this.sectorService.getAll().subscribe(data => this.listSector = data);

  }
  addMarker() {
    this.overlays.push(new google.maps.Marker({ position: { lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng() }, title: this.markerTitle, draggable: this.draggable }));
    this.markerTitle = null;
    this.dialogVisible = false;
  }
  initOverlays() {
    if (!this.overlays || !this.overlays.length) {
      this.overlays = [
        new google.maps.Marker({ position: { lat: 36.879466, lng: 30.667648 }, title: "Konyaalti" }),
        new google.maps.Marker({ position: { lat: 36.883707, lng: 30.689216 }, title: "Ataturk Park" }),
        new google.maps.Marker({ position: { lat: 36.885233, lng: 30.702323 }, title: "Oldtown" }),
        new google.maps.Polygon({
          paths: [
            { lat: 36.9177, lng: 30.7854 }, { lat: 36.8851, lng: 30.7802 }, { lat: 36.8829, lng: 30.8111 }, { lat: 36.9177, lng: 30.8159 }
          ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
        }),
        new google.maps.Circle({ center: { lat: 36.90707, lng: 30.56533 }, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
        new google.maps.Polyline({ path: [{ lat: 36.86149, lng: 30.63743 }, { lat: 36.86341, lng: 30.72463 }], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2 })
      ];
    }
    this.IdMin.NameMin;
  }

}



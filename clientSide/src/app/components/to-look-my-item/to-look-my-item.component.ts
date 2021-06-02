import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Useres } from 'src/app/classes/useres';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { SectorService } from 'src/app/service/sector.service';
import { Min } from 'src/app/classes/min';
import { Times } from 'src/app/classes/times';
import { Sector } from 'src/app/classes/sector';
import { MinService } from 'src/app/service/min.service';
import { TimesService } from 'src/app/service/times.service';
import { ThirdPartyDraggable } from '@fullcalendar/interaction';

// import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-to-look-my-item',
  templateUrl: './to-look-my-item.component.html',
  styleUrls: ['./to-look-my-item.component.css']
})
export class ToLookMyItemComponent implements OnInit {

  listU: Array<Useres> = new Array<Useres>();
  user: Useres;
  d: boolean;
  visibleSidebar2;
  value: number = 0;
  listSector: Array<Sector> = new Array<Sector>();


  overlays: any[];
  options: { center: { lat: number; lng: number; }; zoom: number; };
  lat: number = this.userService.CurrentUser.AddressX;
  lng: number = this.userService.CurrentUser.AddressY;
  // lat: number = 31.768319;
  // lng: number = 35.21371;
  IdMin: Min;
  IdTime: Times;
  IdSector: Sector;

  e: boolean;
  markerTitle: string;
  selectedPosition: any;

  dialogVisible: boolean;

  infoWindow: any;
  draggable: boolean;
  min1: Min;
  min2: string;
  sec: string;
  minim: string
  mi: Min;
  openModal: boolean = false

  constructor(public userService: UserService, public router: Router, public sectorService: SectorService, public minService: MinService, public timesService: TimesService) {

  }
  // , private primengConfig: PrimeNGConfig
  ngOnInit() {

    // this.IdMin.NameMin;


    this.get1();
    debugger;
    //  this.getAll();
    // this.userService.getUserById(this.userService.CurrentUser.CodeUser).subscribe(data=>{this.mi=data.NameMin});
    this.sectorService.getSectorById(this.userService.CurrentUser.CodeSector).subscribe(data => { this.sec = data.NameSector })


    this.user = this.userService.CurrentUser;
    this.min1.IdMin = this.user.Min;

    debugger;
    this.options = {
      center: { lat: 31, lng: this.userService.CurrentUser.AddressY },
      zoom: 12
    };

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
    this.initOverlays();

    this.infoWindow = new google.maps.InfoWindow();

    // this.user.DateOfBirth=new Date(this.user.DateOfBirth);
    this.d = false;
    // this.primengConfig.ripple = true;

  }

  getAll() {
    this.userService.getttUser(1).subscribe(data => this.listU = data);
  }
  update() {
    debugger;
    this.user.AddressX = this.lat;
    this.user.AddressY = this.lng;
    this.userService.update(this.user).subscribe(data => {
      this.e = data,
        this.openModal = true
      document.getElementById('openModal').style.display = 'block'
    }
    )
    // alert("הפרטים עודכנו בהצלחה")
  }
  en() { this.d = true }

  getUsers() {
    this.router.navigate(["/getUsers"])
  }
  toListing() {
    this.router.navigate(["/toListing"])
  }
  MyItem() {
    this.router.navigate(["/MyItem"])
  }
  AddRequest() {
    this.router.navigate(["/AddRequest"])
  }
  openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }

  clalim() {
    this.router.navigate(['/clalim'])
  }

  closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }
  public handleAddressChange(address: Address) {
    debugger;
    console.log("chang" + address.geometry.location.lat());
    console.log("chang" + address.geometry.location.lng());
    this.lat = address.geometry.location.lat()
    this.lng = address.geometry.location.lng()

  }
  handleMapClick(event) {
    debugger;
    this.lat = event.latLng.lat();
    this.lng = event.latLng.lng();
    console.log(this.lat);
    console.log(this.lng);

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

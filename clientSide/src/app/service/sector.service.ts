import { Injectable } from '@angular/core';
import { Sector } from '../classes/sector';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  url: string = "http://localhost:51040/api/Sector/"

  listSector: Array<Sector> = new Array<Sector>()

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Sector>> {
    debugger;
    return this.http.get<Array<Sector>>(this.url + "getSector")
  }

  getSectorById(id: number): Observable<Sector> {
    debugger;
    return this.http.get<Sector>(this.url + "getSectorById/" + id)
  }


}

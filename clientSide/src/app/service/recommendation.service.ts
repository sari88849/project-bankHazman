import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recommendation } from '../classes/recommendation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  url: string = "http://localhost:51040/api/Recommendation/"
  listRecommendation: Array<Recommendation> = new Array<Recommendation>();
  currentRecommendation: Recommendation;

  constructor(public http: HttpClient) { }

  getRecommendation(limit: number): Observable<Array<Recommendation>> {
    debugger;
    return this.http.get<Array<Recommendation>>(this.url + "getRecommendation/" + limit)
  }

  AddRecommendation(rec: Recommendation): Observable<boolean> {
    debugger
    return this.http.put<boolean>(this.url + "AddRecommendation", rec)
  }

  getCountReply(codeuser: number): Observable<number> {
    return this.http.get<number>(this.url + "getCountReply/" + codeuser)
  }

}

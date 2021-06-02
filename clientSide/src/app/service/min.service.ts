import { Injectable } from '@angular/core';
import { Min } from '../classes/min';

@Injectable({
  providedIn: 'root'
})
export class MinService {

  listMin: Array<Min> = new Array<Min>()
  minim: Min = new Min();

  constructor() {
    this.listMin.push(new Min(1, "זכר"))
    this.listMin.push(new Min(2, "נקבה"))

  }

}

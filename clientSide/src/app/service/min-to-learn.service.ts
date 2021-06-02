import { Injectable } from '@angular/core';
import {Min} from '../classes/min'
@Injectable({
  providedIn: 'root'
})
export class MinToLearnService {

  listMinToLearn:Array<Min>=new Array<Min>()

  constructor() { 
      this.listMinToLearn.push(new Min(1,"זכר"))
      this.listMinToLearn.push(new Min(2,"נקבה"))
      this.listMinToLearn.push(new Min(3,"אין עדיפות"))
  }
}

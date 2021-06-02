import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MassageService {
  add(arg0: { severity: string; summary: string; detail: string; }) {
    throw new Error("Method not implemented.");
  }

  constructor(public http:HttpClient) { }
}

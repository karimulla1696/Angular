import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
data:object;
  constructor() { }
  receiveFromA(v){
    this.data=v;
    console.log(v);
  }
  sendToB(){
    return this.data;
  }
  receiveFromB(v){
    this.data=v;
  }
  toA(){
    return this.data;
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent  {
s:object;
s2:object;
name:object;
  constructor(private ds:DataService) {
   this.s2= this.ds.toA();
   }
sendToB(v)
 {
this.s=v;
this.ds.receiveFromA(this.s);
 }
}

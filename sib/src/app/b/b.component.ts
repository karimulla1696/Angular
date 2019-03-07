import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent  {
  data:object;
  namee:object;
  name:object;
  constructor(private ds:DataService) {
    this.data=this.ds.sendToB();
   }
sendToA(v){
  this.data=v;
  this.ds.receiveFromB(this.data);
}

}

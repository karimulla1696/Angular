import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
arr:object[]=[];
data:object[]=[];
data2:object[]=[];
sno:string;
empid:string;
empname:string;
empsalary:string;
empaddr:string;
add(v):void{
  this.arr.push(v);
  console.log(v);
  this.sno='';
  this.empid='';
  this.empname='';
  this.empsalary='';
  this.empaddr='';
}
  addmore(v):void{
    this.data.push(v);
    console.log(v);
  }
  remove(v):void{
    this.data.splice(v,1);
  }
  edit(v):void{
   this.data2=v;
  }
}

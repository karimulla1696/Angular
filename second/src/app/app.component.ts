import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 n:number=10;
 s:string="mulla";
 b:boolean=true;
 arr1:number[]=[10,20,30,40];
 arr2:Array<string>=["krish","vamsi","Manoj"];
 stdObj:object={
   //object
   "sno":100,
  "name":"lucky",
  "age":22
 };
 //tuple
 tp:[number,string,string]=[100,"kalyan","Anil"];
}

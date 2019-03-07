import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'four';
  arr:string[]=[];
 a:string;
 test(a:string):void{
this.a=a;
this.arr.push(a);
this.a='';
 }
}

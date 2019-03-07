import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
a:number;
add(n1,n2):void{
  this.a=(+n1)+(+n2);

}
b:number;
sub(n1,n2):void{
  this.b=(+n1)-(+n2);
}
c:number;
div(n1,n2){
  this.c=(+n1)/(+n2);
}
d:number;
mul(n1,n2){
  this.d=(+n1)*(+n2);
}
}

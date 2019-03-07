import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curdoperation';
  b:boolean=false;
  Data:object[]=[];
  n1:any;
  n2:string;
  n3:string;
  Edit:object;
  add(v):void{
    this.Data.push(v);
    this.n1='';
    this.n2='';
    this.n3='';
  }
  delete(v)
  {
    this.Data.splice(v,1);
  }
  hide():void{
    this.b=false;
  }
  show(v):void{
    this.b=true;
    this.Edit=v;
  }
  close():void{
    this.b=false;
  }
}

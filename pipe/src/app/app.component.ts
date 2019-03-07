import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  aggr:number;
  c:any;
  data:object[]=[
      {
          "sno":1,
          "name":"kalyan",
          "telugu":50,
          "english":45,
          "maths":70
      },
      {
          "sno":2,
          "name":"Anil",
          "telugu":60,
          "english":55,
          "maths":80
      },
      {
          "sno":3,
          "name":"Manjoor",
          "telugu":40,
          "english":65,
          "maths":90
      },
      {
          "sno":4,
          "name":"Surendra",
          "telugu":55,
          "english":75,
          "maths":60
      },
      {
          "sno":5,
          "name":"Pavan",
          "telugu":55,
          "english":75,
          "maths":85
      }
  
  ];
  aggregate(v:any,k:any){
  this.aggr=((v.telugu+v.english+v.maths)/3);
  this.c=k;
  console.log(this.aggr);
  }
}

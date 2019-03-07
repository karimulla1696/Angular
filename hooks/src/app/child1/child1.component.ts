import { Component, OnInit, DoCheck, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,DoCheck,OnChanges,OnDestroy {
   a:any=10;
   test(v){
  this.a=v;
  console.log(v);
   }
  constructor(){
    console.log("child1 constructor");
  }
  ngOnInit(){
    console.log("child1 OnInit");
  }
  ngDoCheck(){
    console.log("child1 Docheck");
  }
  ngOnChanges(){
    console.log("child1 OnChanges");
  }
  ngOnDestroy(){
    console.log("child1 OnDestory");
  }

}

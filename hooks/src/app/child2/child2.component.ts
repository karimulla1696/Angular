import { Component, OnInit, DoCheck, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,DoCheck,OnChanges,OnDestroy {

  constructor(){
    console.log("child2 constructor");
  }
  
  ngOnInit(){
    console.log("child2 OnInit");
  }
  ngDoCheck(){
    console.log("child2 Docheck");
  }
  ngOnChanges(){
    console.log("child2 OnChanges");
  }
  ngOnDestroy(){
    console.log("child2 OnDestory");
  }


}

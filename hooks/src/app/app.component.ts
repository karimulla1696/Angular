import { Component, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck,OnDestroy{
  title = 'hooks';
  constructor(){
    console.log("parent constructor");
  }
  ngOnInit(){
    console.log("parent OnInit");
  }
  ngDoCheck(){
    console.log("parent Docheck");
  }
  ngOnChanges(){
    console.log("parent OnChanges");
  }
  ngOnDestroy(){
    console.log("parent OnDestory");
  }
}

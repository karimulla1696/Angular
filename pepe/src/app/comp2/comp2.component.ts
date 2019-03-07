import { Component, OnInit } from '@angular/core';
import { Test1Service } from '../test1.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
dataemp:object[]=[];
  constructor(private ds:Test1Service) { }

  ngOnInit() {
    this.ds.getemp().subscribe(temp=>{this.dataemp=temp;})
  }

}

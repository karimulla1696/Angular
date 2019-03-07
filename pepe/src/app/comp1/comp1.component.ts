import { Component, OnInit } from '@angular/core';
import { Test1Service } from '../test1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
dataStd:object[]=[];
  constructor(private ds:Test1Service) { }

  ngOnInit() {
    this.ds.getstd().subscribe(temp=>{this.dataStd=temp;})
  }

}

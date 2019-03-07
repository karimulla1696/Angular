import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { Carousel2Component } from './carousel2/carousel2.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    Carousel1Component,
    Carousel2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

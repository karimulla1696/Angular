import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavgComponent } from './navg/navg.component';
import { ServicesComponent } from './services/services.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavgComponent,
    ServicesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

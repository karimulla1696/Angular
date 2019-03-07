import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { McompComponent } from './mcomp/mcomp.component';
import { TcompComponent } from './tcomp/tcomp.component';
import { MscompComponent } from './mscomp/mscomp.component';
import { MhcompComponent } from './mhcomp/mhcomp.component';
import { MrcompComponent } from './mrcomp/mrcomp.component';
import { TscompComponent } from './tscomp/tscomp.component';
import { TlcompComponent } from './tlcomp/tlcomp.component';
import { TpcompComponent } from './tpcomp/tpcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    McompComponent,
    TcompComponent,
    MscompComponent,
    MhcompComponent,
    MrcompComponent,
    TscompComponent,
    TlcompComponent,
    TpcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

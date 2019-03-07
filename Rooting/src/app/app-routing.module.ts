import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { BikesComponent } from './bikes/bikes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{path:'mobile',component:MobileComponent},
                         {path:'television',component:TvComponent},
                         {path:'bikes',component:BikesComponent},
                        {path:'',redirectTo:'mobile',pathMatch:'full'},
                        {path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

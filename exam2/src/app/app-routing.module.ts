import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavgComponent } from './navg/navg.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [{path:'navg',component:NavgComponent,children:[{path:'services',component:ServicesComponent}]},
                         ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

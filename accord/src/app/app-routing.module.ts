import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McompComponent } from './mcomp/mcomp.component';
import { TcompComponent } from './tcomp/tcomp.component';
import { MscompComponent } from './mscomp/mscomp.component';
import { MhcompComponent } from './mhcomp/mhcomp.component';
import { MrcompComponent } from './mrcomp/mrcomp.component';
import { TscompComponent } from './tscomp/tscomp.component';
import { TlcompComponent } from './tlcomp/tlcomp.component';
import { TpcompComponent } from './tpcomp/tpcomp.component';

const routes: Routes = [{path:'mobile',component:McompComponent,children:[{path:'samsung',component:MscompComponent},                          {path:'honour',component:MhcompComponent},{path:'redmi',component:MrcompComponent}]},
                        {path:'television',component:TcompComponent,children:[{path:'sony',component:TscompComponent},{path:'lg',component:TlcompComponent},{path:'panasonic',component:TpcompComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

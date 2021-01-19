import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegExPracComponent } from './reg-ex-prac.component';

const routes: Routes = [{ path: '', component: RegExPracComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegExPracRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttrPracComponent } from './attr-prac.component';

const routes: Routes = [{ path: '', component: AttrPracComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttrPracRoutingModule { }

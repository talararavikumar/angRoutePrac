import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyloadPracComponent } from './lazyload-prac.component';

const routes: Routes = [{ path: '', component: LazyloadPracComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadPracRoutingModule { }

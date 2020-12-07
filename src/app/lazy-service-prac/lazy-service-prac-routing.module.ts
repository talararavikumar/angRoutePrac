import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyServSandBoxComponent } from './components/lazy-serv-sand-box/lazy-serv-sand-box.component';


const routes: Routes = [{
  path: '', component: LazyServSandBoxComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyServicePracRoutingModule { }

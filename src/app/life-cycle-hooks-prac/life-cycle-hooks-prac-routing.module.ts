import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeCycleHooksPracComponent } from './life-cycle-hooks-prac.component';

const routes: Routes = [{ path: '', component: LifeCycleHooksPracComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleHooksPracRoutingModule { }

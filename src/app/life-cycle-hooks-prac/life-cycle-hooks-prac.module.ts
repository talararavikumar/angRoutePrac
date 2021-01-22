import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHooksPracRoutingModule } from './life-cycle-hooks-prac-routing.module';
import { LifeCycleHooksPracComponent } from './life-cycle-hooks-prac.component';


@NgModule({
  declarations: [LifeCycleHooksPracComponent],
  imports: [
    CommonModule,
    LifeCycleHooksPracRoutingModule
  ]
})
export class LifeCycleHooksPracModule { }

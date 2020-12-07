import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyServicePracRoutingModule } from './lazy-service-prac-routing.module';
import { LazyServSandBoxComponent } from './components/lazy-serv-sand-box/lazy-serv-sand-box.component';


@NgModule({
  declarations: [LazyServSandBoxComponent],
  imports: [
    CommonModule,
    LazyServicePracRoutingModule
  ]
})
export class LazyServicePracModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadPracRoutingModule } from './lazyload-prac-routing.module';
import { LazyloadPracComponent } from './lazyload-prac.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LazyloadPracComponent],
  imports: [
    CommonModule,
    SharedModule,
    LazyloadPracRoutingModule
  ],
  providers: []
})
export class LazyloadPracModule { }

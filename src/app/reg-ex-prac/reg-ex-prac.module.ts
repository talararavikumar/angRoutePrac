import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegExPracRoutingModule } from './reg-ex-prac-routing.module';
import { RegExPracComponent } from './reg-ex-prac.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegExPracComponent],
  imports: [
    CommonModule,
    RegExPracRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegExPracModule { }

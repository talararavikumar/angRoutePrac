import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttrPracRoutingModule } from './attr-prac-routing.module';
import { AttrPracComponent } from './attr-prac.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AttrPracComponent],
  imports: [
    CommonModule,
    AttrPracRoutingModule,
    ReactiveFormsModule
  ]
})
export class AttrPracModule { }

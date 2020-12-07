import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatedrivenformsRoutingModule } from './templatedrivenforms-routing.module';
import { TdSimpleformComponent } from './td-simpleform/td-simpleform.component';
import { FormsModule } from '@angular/forms';
import { CdSimpleformComponent } from '../code-driven-forms/cd-simpleform/cd-simpleform.component';


@NgModule({
  declarations: [TdSimpleformComponent],
  exports: [TdSimpleformComponent ],
  imports: [
    CommonModule,
    FormsModule,
    TemplatedrivenformsRoutingModule
  ]
})
export class TemplatedrivenformsModule { }

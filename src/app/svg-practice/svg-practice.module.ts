import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgPracticeRoutingModule } from './svg-practice-routing.module';
import { SvgviewportsampleComponent } from './svgviewportsample/svgviewportsample.component';


@NgModule({
  exports: [SvgviewportsampleComponent],
  declarations: [SvgviewportsampleComponent],
  imports: [
    CommonModule,
    SvgPracticeRoutingModule
  ]
})
export class SvgPracticeModule { }

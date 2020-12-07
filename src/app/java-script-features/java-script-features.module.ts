import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromiseSampleComponent } from './promise-sample/promise-sample.component';



@NgModule({
  exports: [PromiseSampleComponent],
  declarations: [PromiseSampleComponent],
  imports: [
    CommonModule
  ]
})
export class JavaScriptFeaturesModule { }

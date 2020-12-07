import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DISandboxComponent } from './disandbox/disandbox.component';
import { Simpleservice, FakeSimpleservice } from './simpleservice';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [DISandboxComponent],
  exports: [DISandboxComponent],
  //providers : [{ provide: Simpleservice, useClass: !environment.production ? Simpleservice : FakeSimpleservice }],
  imports: [
    CommonModule
  ]
})
export class DIPracModule { }

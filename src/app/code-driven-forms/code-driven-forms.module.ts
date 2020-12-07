import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeDrivenFormsRoutingModule } from './code-driven-forms-routing.module';
import { CdSimpleformComponent } from './cd-simpleform/cd-simpleform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncValidatorPracComponent } from './async-validator-prac/async-validator-prac.component';
import { CdSandboxComponent } from './cd-sandbox/cd-sandbox.component';
import { SearchPracComponent } from './search-prac/search-prac.component';


@NgModule({
  declarations: [CdSimpleformComponent, AsyncValidatorPracComponent, CdSandboxComponent, SearchPracComponent],
  exports: [CdSimpleformComponent, AsyncValidatorPracComponent, CdSandboxComponent,
    SearchPracComponent],
  imports: [
    CommonModule,
    CodeDrivenFormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CodeDrivenFormsModule { }

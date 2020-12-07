import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsPracRoutingModule } from './materials-prac-routing.module';
import { MatautosampleComponent } from './matautosample/matautosample.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialsandboxComponent } from './materialsandbox/materialsandbox.component';


@NgModule({
  declarations: [MatautosampleComponent, MaterialsandboxComponent],
  imports: [
    SharedModule,
    MaterialsPracRoutingModule
  ]
})
export class MaterialsPracModule { }

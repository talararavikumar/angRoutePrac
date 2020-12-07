import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatautosampleComponent } from './matautosample/matautosample.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { MaterialsandboxComponent } from './materialsandbox/materialsandbox.component';


const routes: Routes = [{path: '' , component: MaterialsandboxComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsPracRoutingModule { }

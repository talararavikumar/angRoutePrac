import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SvgviewportsampleComponent } from './svgviewportsample/svgviewportsample.component';


const routes: Routes = [{path: '' , component: SvgviewportsampleComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvgPracticeRoutingModule { }

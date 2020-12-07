import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivebasicDirective } from './directivebasic.directive';
import { DirectivepPracComponent } from './directivep-prac/directivep-prac.component';
import { RenderPracComponent } from './render-prac/render-prac.component';
import { HostListnerPracComponent } from './host-listner-prac/host-listner-prac.component';
import { HostBindingPracComponent } from './host-binding-prac/host-binding-prac.component';
import { CustomStructuralDirectiveComponent } from './custom-structural-directive/custom-structural-directive.component';
import { DirectiveSandBoxComponent } from './directive-sand-box/directive-sand-box.component';



@NgModule({
  declarations: [DirectivebasicDirective, DirectivepPracComponent,
    RenderPracComponent, HostListnerPracComponent,
    HostBindingPracComponent, CustomStructuralDirectiveComponent,
    DirectiveSandBoxComponent],
  exports: [DirectivepPracComponent],
  imports: [
    CommonModule
  ]
})
export class DirectivePracModule { }

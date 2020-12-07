import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PonyComponent } from './ns-pony/ns-pony.component';
import { RaceComponent } from './ns-race/ns-race.component';
import { ImageComponent } from './ns-img/ns-img.component';



@NgModule({
  declarations: [ImageComponent, PonyComponent, RaceComponent],
  exports: [RaceComponent],
  imports: [
    CommonModule
  ]
})
export class ChangedetectionpracModule { }

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CounterService } from './counter.service';



@NgModule({
  declarations: [],
  exports: [ReactiveFormsModule, CommonModule, FormsModule, MaterialModule],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CounterService]
    };
  }

}

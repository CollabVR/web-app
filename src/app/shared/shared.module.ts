import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const EXPORT_COMPONENTS:  Array<Component[]> =  [];

@NgModule({
  declarations: [...EXPORT_COMPONENTS],
  exports: [...EXPORT_COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

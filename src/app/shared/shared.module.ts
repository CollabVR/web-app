import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const EXPORT_COMPONENTS: any[] = [];

@NgModule({
  declarations: [...EXPORT_COMPONENTS],
  exports: [...EXPORT_COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

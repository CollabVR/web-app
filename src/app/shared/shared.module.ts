import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';

const EXPORT_COMPONENTS: any[] = [
  TabsComponent,
];

@NgModule({
  declarations: [...EXPORT_COMPONENTS],
  exports: [...EXPORT_COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

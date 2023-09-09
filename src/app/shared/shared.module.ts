import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { TimeInputComponent } from './components/time-input/time-input.component';

const EXPORT_COMPONENTS: any[] = [
  TabsComponent,
  HeaderComponent,
  TimeInputComponent,
];

@NgModule({
  declarations: [...EXPORT_COMPONENTS],
  exports: [...EXPORT_COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

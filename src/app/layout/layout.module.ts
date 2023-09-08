import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [SidenavComponent, HeaderComponent],
  exports: [SidenavComponent, HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
  ]
})
export class LayoutModule { 

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: LayoutModule
  ) {
    if (parentModule) {
      throw new Error('LayoutModule is already loaded. Import it in the AppModule only.');
    }
  }
}

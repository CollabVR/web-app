import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { ActivitySchedulingModule } from './modules/activity-scheduling/activity-scheduling.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ActivitySchedulingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

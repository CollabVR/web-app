import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { ActivitiesComponent } from './modules/activity-scheduling/pages/activities/activities.component';
import { MyActivitiesComponent } from './modules/activity-scheduling/pages/my-activities/my-activities.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ActivitiesComponent,
    MyActivitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

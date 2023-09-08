import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { ViewsModule } from './views/views.module';
import { ActivitySchedulingModule } from './activity-scheduling/activity-scheduling.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    ViewsModule,
    ActivitySchedulingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

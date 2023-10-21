import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformAnalyticsRoutingModule } from './platform-analytics-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AnalyticsComponent } from './pages/analytics/analytics.component';



@NgModule({
  declarations: [
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    PlatformAnalyticsRoutingModule,
    SharedModule,
  ]
})
export class PlatformsAnalyticsModule { }

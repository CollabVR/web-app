import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformAnalyticsRoutingModule } from './platform-analytics-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    PlatformAnalyticsRoutingModule,
    SharedModule,
    ChartModule,
  ]
})
export class PlatformsAnalyticsModule { }

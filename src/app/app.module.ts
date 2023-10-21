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
import { JwtModule } from '@auth0/angular-jwt';
import { PlatformsAnalyticsModule } from './platform-analytics/platform-analytics.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    JwtModule.forRoot({
      config: {
        // You can skip this if you don't want to automatically attach the token to HTTP requests
        tokenGetter: () => {
          return localStorage.getItem('access_token'); // or wherever you store your token
        },
        // allowedDomains: ['yourapi.com'], // add your API domain here
        disallowedRoutes: ['http://yourapi.com/auth/'], // routes that shouldn't have the token automatically attached
      },
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    ViewsModule,
    ActivitySchedulingModule,
    PlatformsAnalyticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

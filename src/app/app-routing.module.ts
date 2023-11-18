import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activity-scheduling/pages/activities/activities.component';
import { MyActivitiesComponent } from './activity-scheduling/pages/my-activities/my-activities.component';
import { CreateActivitiesComponent } from './activity-scheduling/pages/create-activities/create-activities.component';
import { ActivityComponent } from './activity-scheduling/pages/activity/activity.component';
import { PageNotFoundView } from './views/page-not-found/page-not-found.view';
import { UnauthorizedComponent } from './views/unauthorized/unauthorized.component';
import { roleBasedGuard } from './core/guards/role-based.guard';
import { UserSessionService } from './core/services/user-session.service';
import { sessionGuard } from './core/guards/session.guard';

const routes: Routes = [
  { path: '', redirectTo: 'activities', pathMatch: 'full' },
  {
    path: 'activities',
    loadChildren: () =>
      import('./activity-scheduling/activity-scheduling.module').then(
        (m) => m.ActivitySchedulingModule
      ),
    canActivateChild: [sessionGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./platform-analytics/platform-analytics.module').then((m) => m.PlatformsAnalyticsModule),
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: '**',
    component: PageNotFoundView,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: roleBasedGuard,
      useFactory: (userSessionService: UserSessionService, router: Router) =>
        roleBasedGuard(userSessionService, router),
      deps: [UserSessionService, Router],
    },
    {
      provide: sessionGuard,
      useFactory: (userSessionService: UserSessionService, router: Router) =>
        sessionGuard(userSessionService, router),
      deps: [UserSessionService, Router],
    },
  ],
})
export class AppRoutingModule { }

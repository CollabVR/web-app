import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activity-scheduling/pages/activities/activities.component';
import { MyActivitiesComponent } from './activity-scheduling/pages/my-activities/my-activities.component';
import { CreateActivitiesComponent } from './activity-scheduling/pages/create-activities/create-activities.component';
import { ActivityComponent } from './activity-scheduling/pages/activity/activity.component';
import { PageNotFoundView } from './views/page-not-found/page-not-found.view';

const routes: Routes = [
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
  {
    path: 'activities',
    component: ActivitiesComponent,
  },
  {
    path: 'activities/:id',
    component: ActivityComponent,
  },
  {
    path: 'my-activities',
    component: MyActivitiesComponent,
  },
  {
    path: 'create-activity',
    component: CreateActivitiesComponent,
  },
  {
    path: '**',
    component: PageNotFoundView
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

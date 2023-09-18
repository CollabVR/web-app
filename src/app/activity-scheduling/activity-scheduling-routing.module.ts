import { NgModule } from '@angular/core';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { RouterModule, Routes } from '@angular/router';
import { roleBasedGuard } from '../core/guards/role-based.guard';
import { MyActivitiesComponent } from './pages/my-activities/my-activities.component';
import { CreateActivitiesComponent } from './pages/create-activities/create-activities.component';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
  },
  {
    path: ':id',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitySchedulingRoutingModule {}

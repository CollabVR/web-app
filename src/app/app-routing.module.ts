import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './modules/activity-scheduling/pages/activities/activities.component';
import { MyActivitiesComponent } from './modules/activity-scheduling/pages/my-activities/my-activities.component';

const routes: Routes = [
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
  {
    path: 'activities',
    component: ActivitiesComponent,
  },
  {
    path: 'my-activities',
    component: MyActivitiesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

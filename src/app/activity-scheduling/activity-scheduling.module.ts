import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { MyActivitiesComponent } from './pages/my-activities/my-activities.component';
import { MatCardModule } from '@angular/material/card';
import { ActivityItemComponent } from './components/activity-item/activity-item.component';

@NgModule({
  declarations: [
    ActivitiesComponent,
    MyActivitiesComponent,
    ActivityItemComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ActivitySchedulingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { MyActivitiesComponent } from './pages/my-activities/my-activities.component';

@NgModule({
  declarations: [
    ActivitiesComponent,
    MyActivitiesComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class ActivitySchedulingModule { }

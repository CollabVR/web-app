import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { MyActivitiesComponent } from './pages/my-activities/my-activities.component';
import { MatCardModule } from '@angular/material/card';
import { ActivityItemComponent } from './components/activity-item/activity-item.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { SharedModule } from '../shared/shared.module';
import { CreateActivitiesComponent } from './pages/create-activities/create-activities.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ActivitiesComponent,
    MyActivitiesComponent,
    ActivityItemComponent,
    ActivityListComponent,
    CreateActivitiesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ActivitySchedulingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ActivitiesComponent } from './pages/activities/activities.component';
import { MyActivitiesComponent } from './pages/my-activities/my-activities.component';
import { CreateActivitiesComponent } from './pages/create-activities/create-activities.component';

import { ActivityItemComponent } from './components/activity-item/activity-item.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { GeneralActivityDetailFormComponent } from './components/general-activity-detail-form/general-activity-detail-form.component';
import { ActivityParticipantsFormComponent } from './components/activity-participants-form/activity-participants-form.component';
import { ActivityEnvironmentsFormComponent } from './components/activity-environments-form/activity-environments-form.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { ActivityDetailComponent } from './components/activity-detail/activity-detail.component';
import { ActivityParticipantsComponent } from './components/activity-participants/activity-participants.component';


@NgModule({
  declarations: [
    ActivitiesComponent,
    MyActivitiesComponent,
    ActivityItemComponent,
    ActivityListComponent,
    CreateActivitiesComponent,
    GeneralActivityDetailFormComponent,
    ActivityParticipantsFormComponent,
    ActivityEnvironmentsFormComponent,
    ActivityComponent,
    ActivityDetailComponent,
    ActivityParticipantsComponent,
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
  ]
})
export class ActivitySchedulingModule { }

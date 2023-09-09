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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { GeneralActivityDetailFormComponent } from './components/general-activity-detail-form/general-activity-detail-form.component';
import { ActivityParticipantsFormComponent } from './components/activity-participants-form/activity-participants-form.component';
import { ActivityEnvironmentsFormComponent } from './components/activity-environments-form/activity-environments-form.component';
import { ActivityDetailComponent } from './pages/activity-detail/activity-detail.component';


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
    ActivityDetailComponent,
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

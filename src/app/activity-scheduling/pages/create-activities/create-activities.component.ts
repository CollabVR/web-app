import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-activities',
  templateUrl: './create-activities.component.html',
  styleUrls: ['./create-activities.component.css']
})
export class CreateActivitiesComponent {

  generalActivityDetailFormGroup = this._formBuilder.group({
    titleCtrl: ['', Validators.required],
    descriptionCtrl: ['', Validators.required]
  });

  specificActivityDetailFormGroup = this._formBuilder.group({
    dateCtrl: ['', Validators.required],
    startTimeCtrl: ['', Validators.required],
    endTimeCtrl: ['', Validators.required],
    numParticipantsCtrl: ['', Validators.required],
  });

  activityEnvironmentsFormGroup = this._formBuilder.group({
    environmentCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}

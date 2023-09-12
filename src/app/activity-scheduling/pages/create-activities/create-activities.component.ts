import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { CreateActivityDto } from '../../dtos/create-activity.dto';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-activities',
  templateUrl: './create-activities.component.html',
  styleUrls: ['./create-activities.component.css'],
})
export class CreateActivitiesComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private activityService: ActivityService,
    private _snackBar: MatSnackBar
  ) {}

  createActivity() {
    const startTime: string = this.combineDateAndTime(
      this.specificActivityDetailFormGroup.value.dateCtrl!,
      this.specificActivityDetailFormGroup.value.startTimeCtrl!
    );

    const endTime: string = this.combineDateAndTime(
      this.specificActivityDetailFormGroup.value.dateCtrl!,
      this.specificActivityDetailFormGroup.value.endTimeCtrl!
    );

    const createActivityDto: CreateActivityDto = new CreateActivityDto(
      this.generalActivityDetailFormGroup.value.titleCtrl!,
      this.generalActivityDetailFormGroup.value.descriptionCtrl!,
      startTime,
      endTime,
      Number(this.specificActivityDetailFormGroup.value.numParticipantsCtrl!),
      this.activityEnvironmentsFormGroup.value.environmentCtrl!
    );

    console.log('createActivityDto', createActivityDto);
    this.activityService.createActivity(createActivityDto).subscribe(
      (response) => {
        console.log('response', response);
        this.openSnackBar('Activity Created!!', 'Okay');
      },
      (error) => {
        console.log('error', error);
        this.openSnackBar('Error creating activity :(', 'Okay');
      }
    );
  }

  openSnackBar(msg: string, action: string) {
    this._snackBar.open(msg, action, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  combineDateAndTime(date: Date, time: string): string {
    const dateObj = date;
    const timeParts = time.split(':').map(Number); // Split the time into parts and map to numbers
    // Set the time while keeping the local time zone
    dateObj.setHours(timeParts[0]);
    dateObj.setMinutes(timeParts[1]);
    // return date as utc string with ISO format
    return dateObj.toISOString();
  }

  generalActivityDetailFormGroup = this._formBuilder.group({
    titleCtrl: ['', Validators.required],
    descriptionCtrl: ['', Validators.required],
  });

  specificActivityDetailFormGroup = this._formBuilder.group({
    dateCtrl: [new Date(), Validators.required],
    startTimeCtrl: ['', Validators.required],
    endTimeCtrl: ['', Validators.required],
    numParticipantsCtrl: [0, [Validators.required, Validators.min(1)]],
  });

  activityEnvironmentsFormGroup = this._formBuilder.group({
    environmentCtrl: ['', Validators.required],
  });
}

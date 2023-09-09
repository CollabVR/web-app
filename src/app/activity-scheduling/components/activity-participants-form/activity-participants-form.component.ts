import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activity-participants-form',
  templateUrl: './activity-participants-form.component.html',
  styleUrls: ['./activity-participants-form.component.css']
})
export class ActivityParticipantsFormComponent {
  @Input()
  formGroup!: FormGroup;
   
}

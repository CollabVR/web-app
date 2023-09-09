import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activity-environments-form',
  templateUrl: './activity-environments-form.component.html',
  styleUrls: ['./activity-environments-form.component.css']
})
export class ActivityEnvironmentsFormComponent {
  @Input()
  formGroup!: FormGroup;
}

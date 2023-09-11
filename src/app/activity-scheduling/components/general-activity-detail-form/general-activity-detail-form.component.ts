import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-general-activity-detail-form',
  templateUrl: './general-activity-detail-form.component.html',
  styleUrls: ['./general-activity-detail-form.component.css'],
})
export class GeneralActivityDetailFormComponent {
  @Input()
  formGroup!: FormGroup;
}

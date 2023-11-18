import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity-environments-form',
  templateUrl: './activity-environments-form.component.html',
  styleUrls: ['./activity-environments-form.component.css'],
})
export class ActivityEnvironmentsFormComponent {
  @Input()
  formGroup!: FormGroup;
  environments: any[] = [];
  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.activityService.getAllEnvironments().subscribe((data) => {
      this.environments = data;
    });
  }
}

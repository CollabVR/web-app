import { Component } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { ActivityEntity } from '../../dtos/activity.entity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
})
export class ActivityListComponent {
  activities: ActivityEntity[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.activityService
      .getAllActivities()
      .subscribe((data: ActivityEntity[]) => {
        this.activities = data;
      });
  }
}

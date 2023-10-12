import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityEntity } from '../../dtos/activity.entity';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css'],
})
export class ActivityItemComponent {
  @Input() activity!: ActivityEntity;
  environment?: any;

  constructor(
    private router: Router,
    public utils: UtilsService,
    public activityService: ActivityService
  ) {}
  ngOnInit(): void {
    this.activityService
      .getEnvironmentById(this.activity?.environmentId)
      .subscribe((environment) => {
        this.environment = environment;
      });
  }
  onViewMore(): void {
    this.router.navigate(['activities/id', this.activity.id]);
  }

  onJoin(): void {
    console.log('Joining activity');
  }
}

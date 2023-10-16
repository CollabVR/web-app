import { Component, Input } from '@angular/core';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ActivityService } from '../../services/activity.service';

import { ActivityEntity } from '../../dtos/activity.entity';
import { ActivityUserEntity } from '../../dtos/activity-user.entity';
import { ActivityUserRole } from '../../dtos/activity-user-role.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
})
export class ActivityDetailComponent {
  @Input() activity?: ActivityEntity;
  environment?: { id: string; image: string };

  constructor(
    public utils: UtilsService,
    public activityService: ActivityService,
    public router: Router
  ) {}

  ngOnChanges(): void {
    if (this.activity) {
      this.activityService
        .getEnvironmentById(this.activity.environmentId)
        .subscribe((environment) => {
          this.environment = environment;
        });
    }
  }

  onRegister() {
    this.activityService
      .registerToActivity(this.activity!)
      .subscribe((activity) => {
        this.activity = activity;
      });
  }

  onDelete() {
    this.activityService.deleteActivity(this.activity!.id).subscribe((_) => {
      this.router.navigate(['/activities']);
    });
  }

  onLeaveActivity() {
    this.activityService.leaveActivity(this.activity!).subscribe((activity) => {
      console.log('deleted activity', activity);
      this.activity = activity;
    });
  }
}

import { Component, Input } from '@angular/core';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ActivityService } from '../../services/activity.service';

import { ActivityEntity } from '../../dtos/activity.entity';
import { ActivityUserEntity } from '../../dtos/activity-user.entity';
import { ActivityUserRole } from '../../dtos/activity-user-role.enum';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
})
export class ActivityDetailComponent {
  @Input() activity?: ActivityEntity;

  constructor(
    public utils: UtilsService,
    public activityService: ActivityService
  ) {}

  onRegister() {
    const user: ActivityUserEntity = {
      userId: 62,
      userName: 'Luis 45',
    };

    this.activityService
      .registerToActivity(this.activity!, user, ActivityUserRole.MODERATOR)
      .subscribe((activity) => {
        this.activity = activity;
      });
  }

  onLeaveActivity() {
    const user: ActivityUserEntity = {
      userId: 55,
      userName: 'Juan 55',
    };

    this.activityService
      .leaveActivity(this.activity!, user.userId, ActivityUserRole.MODERATOR)
      .subscribe((activity) => {
        console.log('deleted activity', activity);
        this.activity = activity;
      });
  }
}

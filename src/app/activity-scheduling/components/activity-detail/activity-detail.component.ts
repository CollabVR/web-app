import { Component, Input } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { ActivityService } from '../../services/activity.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
      userId: 44,
      userName: 'Juan 22',
    };

    this.activityService
      .registerToActivity(this.activity!, user, ActivityUserRole.STUDENT)
      .subscribe((activity) => {
        this.activity = activity;
      });
  }
}

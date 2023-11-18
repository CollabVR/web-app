import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityEntity } from '../../dtos/activity.entity';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ActivityService } from '../../services/activity.service';
import { UserSessionService } from 'src/app/core/services/user-session.service';

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
    public activityService: ActivityService,
    private userSessionService: UserSessionService
  ) { }

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

  onJoin(event: Event): void {
    event.stopPropagation();
    
    this.activityService
      .registerToActivity(this.activity)
      .subscribe((activity) => {
        this.activity = activity;
      });
  }

  onLeave(event: Event): void {
    event.stopPropagation();

    this.activityService.leaveActivity(this.activity!).subscribe((activity) => {
      console.log('deleted activity', activity);
      this.activity = activity;
    });
  }

  isJoined(activity: ActivityEntity): boolean {
    const isStudentJoinend = activity.students.find((student) => student.userId === this.userSessionService.getUserSession()?.id);
    const isModeratorJoinend = activity.moderators.find((student) => student.userId === this.userSessionService.getUserSession()?.id);

    if (isStudentJoinend || isModeratorJoinend) return true;
    return false;
  }

}

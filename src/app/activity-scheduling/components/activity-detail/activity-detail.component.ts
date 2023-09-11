import { Component } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { ActivityService } from '../../services/activity.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityEntity } from '../../dtos/activity.entity';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
})
export class ActivityDetailComponent {
  private subActivity?: Subscription;
  public activity?: ActivityEntity;

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute,
    public utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.subActivity = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.loadActivity(id);
    });
  }

  ngOnDestroy(): void {
    this.subActivity?.unsubscribe();
  }

  private loadActivity(id: number): void {
    this.activityService.getActivityById(id).subscribe((activity) => {
      console.log(activity);
      this.activity = activity;
    });
  }

  onJoin(): void {
    console.log('Joining activity');
  }
}

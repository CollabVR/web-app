import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActivityEntity } from '../../dtos/activity.entity';
import { ActivityService } from '../../services/activity.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent {
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


}

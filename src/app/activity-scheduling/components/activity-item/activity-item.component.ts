import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityEntity } from '../../dtos/activity.entity';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css'],
})
export class ActivityItemComponent {
  @Input() activity!: ActivityEntity;

  constructor(private router: Router, public utils: UtilsService) {}

  onViewMore(): void {
    this.router.navigate(['activities', this.activity.id]);
  }

  onJoin(): void {
    console.log('Joining activity');
  }
}

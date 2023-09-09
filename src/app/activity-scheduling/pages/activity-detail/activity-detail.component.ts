import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent {
  activityId!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.activityId =+ params['id'];
    })
  }

}

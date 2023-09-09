import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  activityId!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.activityId =+ params['id'];
    })
  }

}

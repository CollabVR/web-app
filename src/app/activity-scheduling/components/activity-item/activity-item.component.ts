import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent {

  constructor(private router: Router) {}

  onItemClicked(): void {
    this.router.navigate(['activities', 1]);
  }

}

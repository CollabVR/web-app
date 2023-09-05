import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  activeTab: string = 'Public';

  onTabClick(tabName: string): void {
    this.activeTab = tabName;
  }

}

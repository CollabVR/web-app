import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  tabOptions: string[] = ['Public', 'Conference', 'Taller'];
  selectedTab: string = this.tabOptions[0];

  handleSelectedTab(selectedTab: string): void {
    this.selectedTab = selectedTab;
    console.log(selectedTab)
  }


}

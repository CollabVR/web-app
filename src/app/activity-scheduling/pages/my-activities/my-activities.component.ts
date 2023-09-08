import { Component } from '@angular/core';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.css']
})
export class MyActivitiesComponent {
  tabOptions: string[] = ['Public', 'Conference'];
  selectedTab: string = this.tabOptions[0];

  handleSelectedTab(selectedTab: string): void {
    this.selectedTab = selectedTab;
    console.log(selectedTab)
  }

}

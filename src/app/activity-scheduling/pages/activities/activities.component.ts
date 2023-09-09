import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  tabOptions: string[] = ['Public', 'Conference', 'Taller'];
  selectedTab: string = this.tabOptions[0];

  constructor(private router: Router) { }

  handleSelectedTab(selectedTab: string): void {
    this.selectedTab = selectedTab;
  }

  navigateCreateActivity(): void {
    this.router.navigate(['create-activity']);
  }
}

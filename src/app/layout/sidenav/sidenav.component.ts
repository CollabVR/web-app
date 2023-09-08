import { Component } from '@angular/core';
import { sidenavItems } from './sidenav-items.data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  navItems = sidenavItems;
  currentSelected = 'Activities';

  onSidenavItemSelected(selected: string): void {
    this.currentSelected = selected;
  }

}

import { Component, EventEmitter, Output } from '@angular/core';
import { sidenavItems } from './sidenav-items.data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Output()
  selectedOpcionEmitter = new EventEmitter<string>();
  
  navItems = sidenavItems;
  currentSelected = 'Activities';

  onSidenavItemSelected(selected: string): void {
    this.currentSelected = selected;
    this.selectedOpcionEmitter.emit(selected);
  }
}

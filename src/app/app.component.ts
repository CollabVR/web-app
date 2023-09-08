import { Component } from '@angular/core';
import { sidenavItems } from './layout/sidenav/sidenav-items.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidenavOptionSelected: string = sidenavItems[0].label;

  handleSelectedOption(selectedOption: string): void {
    this.sidenavOptionSelected = selectedOption;
  }

}

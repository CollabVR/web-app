import { Component } from '@angular/core';
import {
  authSidenavItems,
  unauthSidenavItems,
} from './layout/sidenav/sidenav-items.data';
import { UserSessionService } from './core/services/user-session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private userSessionService: UserSessionService
  ) { }

  sidenavOptionSelected?: string;
  handleSelectedOption(selectedOption: string): void {
    this.sidenavOptionSelected = selectedOption;
  }

  isUserLogged(): boolean {
    return this.userSessionService.getUserSession() ? true : false;
  }

  
}

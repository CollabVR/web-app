import { Component, EventEmitter, Output } from '@angular/core';
import {
  SideNavItem,
  authSidenavItems,
  unauthSidenavItems,
} from './sidenav-items.data';
import { UserSessionService } from 'src/app/core/services/user-session.service';
import { UserSession } from 'src/app/core/entities/user-session.entity';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  @Output()
  selectedOpcionEmitter = new EventEmitter<string>();
  navItems?: Array<SideNavItem>;
  currentSelected?: string;
  private subscription?: Subscription;

  constructor(
    private userSessionService: UserSessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.userSessionService.userSession$.subscribe(
      (userSession) => {
        console.log('User session changed:', userSession);
        this.updateNavItemsBasedOnUserSession(userSession);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onSidenavItemSelected(selected: string): void {
    this.currentSelected = selected;
    this.selectedOpcionEmitter.emit(selected);
  }

  logout(): void {
    this.userSessionService.clearUserSession();
    this.router.navigate(['auth/signin']);
  }

  updateNavItemsBasedOnUserSession(userSession: UserSession | null): void {
    if (userSession) {
      this.navItems = authSidenavItems;
      this.currentSelected = authSidenavItems[0].label;
    } else {
      this.navItems = unauthSidenavItems;
      this.currentSelected = unauthSidenavItems[0].label;
    }
  }
}

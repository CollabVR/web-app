import { Router } from '@angular/router';
import { UserSessionService } from '../services/user-session.service';
import { TestBed } from '@angular/core/testing';
import { roleBasedGuard } from './role-based.guard';

describe('roleBasedGuard', () => {
  let userSessionServiceMock: jasmine.SpyObj<UserSessionService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(() => {
    userSessionServiceMock = jasmine.createSpyObj('UserSessionService', [
      'getUserSession',
    ]);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: UserSessionService, useValue: userSessionServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });
  });

  it('should be created', () => {
    const guard = roleBasedGuard(userSessionServiceMock, routerMock);
    expect(guard).toBeTruthy();
  });
});

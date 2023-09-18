import { Router } from '@angular/router';
import { UserSessionService } from '../services/user-session.service';
import { TestBed } from '@angular/core/testing';
import { sessionGuard } from './session.guard';

describe('sessionGuard', () => {
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
    const guard = sessionGuard(userSessionServiceMock, routerMock);
    expect(guard).toBeTruthy();
  });

  // Additional tests can be added to test the behavior of the guard
});

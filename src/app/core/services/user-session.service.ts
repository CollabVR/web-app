import { Injectable } from '@angular/core';
import { UserSession } from '../entities/user-session.entity';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Role } from '../entities/role.entity';

export const USER_SESSION = 'user_session';
export const ACCESS_TOKEN = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  private userSessionSubject: BehaviorSubject<UserSession | null>;
  userSession$;

  constructor(private jwtHelper: JwtHelperService) {
    const initialSession = this.getUserSession();
    this.userSessionSubject = new BehaviorSubject<UserSession | null>(
      initialSession
    );
    this.userSession$ = this.userSessionSubject.asObservable();
  }

  transformTokenToUserSession(token: string): UserSession | null {
    const decodedToken = this.jwtHelper.decodeToken(token);

    if (!decodedToken) return null;

    const [firstName, lastName] = decodedToken.fullName.split(' ');

    return new UserSession(
      decodedToken.sub.toString(),
      firstName,
      lastName,
      decodedToken.email,
      token,
      decodedToken.roles.map((role: any) => new Role(role.id, role.name))
    );
  }

  setUserSession(jwt: string) {
    const userSession = this.transformTokenToUserSession(jwt);
    localStorage.setItem(ACCESS_TOKEN, jwt);
    localStorage.setItem(USER_SESSION, JSON.stringify(userSession));
    this.userSessionSubject.next(userSession);
  }

  getUserSession(): UserSession | null {
    const userSession = localStorage.getItem(USER_SESSION);
    if (!userSession) {
      return null;
    }
    return JSON.parse(userSession);
  }

  clearUserSession() {
    localStorage.removeItem(USER_SESSION);
    this.userSessionSubject.next(null);
  }
}

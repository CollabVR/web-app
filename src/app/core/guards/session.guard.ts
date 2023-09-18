import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { UserSessionService } from '../services/user-session.service';
import { Observable } from 'rxjs';

export function sessionGuard(
  userSessionService: UserSessionService,
  router: Router
) {
  return (
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
    const userSession = userSessionService.getUserSession();

    if (!userSession) {
      router.navigate(['auth/signin']);
      return false;
    }
    return true;
  };
}

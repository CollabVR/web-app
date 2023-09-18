import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateFn,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserSessionService } from '../services/user-session.service';

export function roleBasedGuard(
  userSessionService: UserSessionService,
  router: Router
): CanActivateFn {
  return (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
    const userSession = userSessionService.getUserSession();

    if (!userSession) {
      // If there's no user session, redirect to login or another appropriate page
      router.navigate(['auth/signin']);
      return false;
    }

    const requiredRoles = route.data['roles'];

    if (!requiredRoles || requiredRoles.length === 0) {
      // If no roles are defined in route data, allow access
      return true;
    }

    const hasRequiredRole = userSession.roles.some((role) =>
      requiredRoles.includes(role)
    );

    if (!hasRequiredRole) {
      // If the user doesn't have the required role, redirect to an unauthorized or another appropriate page
      router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  };
}

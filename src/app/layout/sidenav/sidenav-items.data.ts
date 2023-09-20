export interface SideNavItem {
  router: string;
  icon: string;
  label: string;
}

export const authSidenavItems: Array<SideNavItem> = [
  {
    icon: 'school',
    label: 'Activities',
    router: 'activities',
  },
  {
    icon: 'format_list_bulleted_add',
    label: 'My Activities',
    router: 'activities/my-activities',
  },
  {
    icon: 'dashboard',
    label: 'Dashboard',
    router: 'dashboard',
  },
  {
    icon: 'logout',
    label: 'Logout',
    router: 'auth/logout',
  },
];

export const unauthSidenavItems: Array<SideNavItem> = [
  {
    icon: 'login',
    label: 'Sign In',
    router: 'auth/signin',
  },
  {
    icon: 'person_add',
    label: 'Sign Up',
    router: 'auth/signup',
  },
];

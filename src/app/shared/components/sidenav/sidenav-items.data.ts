interface SideNavItem {
    router: string;
    icon: string;
    label: string;
}

export const sidenavItems: Array<SideNavItem> = [
    {
        icon: 'school',
        label: 'Activities',
        router: 'activities',
    },
    {
        icon: 'format_list_bulleted_add',
        label: 'My Activities',
        router: 'my-activities'
    },
    {
        icon: 'dashboard',
        label: 'Dashboard',
        router: ''
    },
]
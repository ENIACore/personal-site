import { House, Briefcase, FolderDot, FilePen, Mail, LucideIcon } from 'lucide-react';

export interface NavigationItem {
    label: string;
    path: string;
    icon: LucideIcon;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        label: 'Home',
        path: '/',
        icon: House,
    },
    {
        label: 'Experience',
        path: '/experience',
        icon: Briefcase,
    },
    {
        label: 'Projects',
        path: '/projects',
        icon: FolderDot,
    },
    {
        label: 'Blogs',
        path: '/blogs',
        icon: FilePen,
    },
    {
        label: 'Contact',
        path: '/contact',
        icon: Mail,
    },
];

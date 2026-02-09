import React from 'react';
import Link from 'next/link';
import Tooltip from '../ui/Tooltip';
import BackgroundGradient from '../ui/BackgroundGradient';
import { NAVIGATION_ITEMS } from '@/src/constants/navigation';

const Navbar: React.FC = () => {
    return (
        <header className="relative top-0 z-40 flex flex-col items-center mb-4">
        <nav className="relative px-4 w-4/5 max-w-150 bg-background border-b-2 border-l-2 border-r-2 border-border-subtle rounded-b-lg md:w-3/4 lg:w-2/3">
            <BackgroundGradient className="rounded-b-lg" opacity={.06}/>
            <ul className="flex flex-row justify-around mt-4 mb-4 mx-auto max-w-100">
                {NAVIGATION_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <li key={item.path} className="group relative">
                            <Link href={item.path} className="cursor-pointer">
                                <Icon className="text-foreground hover:text-foreground-muted transition-colors"/>
                            </Link>
                            <Tooltip text={item.label}/>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </header>
    );
};

export default Navbar;

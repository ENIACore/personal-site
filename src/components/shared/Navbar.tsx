import React from 'react';
import Link from 'next/link';
import { House, Briefcase, FolderDot, FilePen, Mail} from 'lucide-react';
import Tooltip from '../ui/Tooltip';
import BackgroundGradient from '../ui/BackgroundGradient';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Navbar: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 flex flex-col items-center">
        <nav className="relative w-4/5 md:w-3/4 lg:w-2/3 max-w-150 rounded-b-lg border-b-2 border-l-2 border-r-2 border-border-subtle bg-background px-4">
            <BackgroundGradient classes='' opacity={.06}/>
            <ul className="flex flex-row justify-around max-w-100 mt-4 mb-4 mx-auto">
                <li className="group relative">
                    <Link href="/" className="cursor-pointer">
                        <House className="text-foreground hover:text-foreground-muted transition-colors"/>
                    </Link>
                    <Tooltip text='Home'/>
                </li>
                <li className="group relative">
                    <Link href="/experience" className="cursor-pointer">
                        <Briefcase className="text-foreground hover:text-foreground-muted transition-colors"/>
                    </Link>
                    <Tooltip text='Experience'/>
                </li>
                <li className="group relative">
                    <Link href="/projects" className="cursor-pointer">
                        <FolderDot className="text-foreground hover:text-foreground-muted transition-colors"/>
                    </Link>
                    <Tooltip text='Projects'/>
                </li>
                <li className="group relative">
                    <Link href="/blogs" className="cursor-pointer">
                        <FilePen className="text-foreground hover:text-foreground-muted transition-colors"/>
                    </Link>
                    <Tooltip text='Blogs'/>
                </li>
                <li className="group relative">
                    <Link href="#" className="cursor-pointer">
                        <Mail className="text-foreground hover:text-foreground-muted transition-colors"/>
                    </Link>
                    <Tooltip text='Contact'/>
                </li>
            </ul>
        </nav>
        </header>
    );
};

export default Navbar;

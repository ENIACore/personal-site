import React from 'react';
import Gradient from './Gradient';
import { House, Briefcase, FolderDot, FilePen, Mail} from 'lucide-react';
import Tooltip from '../ui/Tooltip';
//import Image from 'next/image';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Navbar: React.FC = () => {
    return (
        <div className="sticky top-0 flex flex-col items-center">
        <nav className="w-4/5 md:w-3/4 lg:w-2/3 max-w-150 rounded-b-lg border-b-2 border-l-2 border-r-2 border-primary-300 bg-neutral-300 px-4">
            <Gradient/>
            <ul className="flex flex-row justify-around max-w-100 mt-4 mb-4 mx-auto">
                <li className="group relative">
                    <a className="cursor-pointer">
                        <House className="text-primary-600 hover:text-primary-300 transition-colors"/>
                    </a>
                    <Tooltip text='Home'/>
                </li>
                <li className="group relative">
                    <a className="cursor-pointer">
                        <Briefcase className="text-primary-600 hover:text-primary-300 transition-colors"/>
                    </a>
                    <Tooltip text='Experience'/>
                </li>
                <li className="group relative">
                    <a className="cursor-pointer">
                        <FolderDot className="text-primary-600 hover:text-primary-300 transition-colors"/>
                    </a>
                    <Tooltip text='Projects'/>
                </li>
                <li className="group relative">
                    <a className="cursor-pointer">
                        <FilePen className="text-primary-600 hover:text-primary-300 transition-colors"/>
                    </a>
                    <Tooltip text='Blogs'/>
                </li>
                <li className="group relative">
                    <a className="cursor-pointer">
                        <Mail className="text-primary-600 hover:text-primary-300 transition-colors"/>
                    </a>
                    <Tooltip text='Contact'/>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;

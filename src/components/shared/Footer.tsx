import React from 'react';
import TextLink from '../ui/TextLink';
import BackgroundGradient from '../ui/BackgroundGradient';
import SubText from '../ui/SubText';
import { NAVIGATION_ITEMS } from '@/src/constants/navigation';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="z-50 flex flex-col items-center mt-4">
        <footer className="relative py-6 px-12 w-4/5 max-w-150 bg-background border-t-2 border-l-2 border-r-2 border-border-subtle rounded-t-lg md:w-3/4 lg:w-2/3">
            <BackgroundGradient className="rounded-t-lg" opacity={.06}/>
            <ul className="flex flex-row flex-wrap justify-between w-full py-2">
                {NAVIGATION_ITEMS.map((item) => (
                    <li key={item.path} className="group relative px-1">
                        <TextLink text={item.label} link={item.path}/>
                    </li>
                ))}
            </ul>

            {/* Divider line - half width */}
            <div className="flex justify-center my-3">
                <div className="w-3/4 border-t border-border-subtle"></div>
            </div>

            <div className="flex flex-row justify-between text-sm py-2">
                <SubText className="cursor-default" text={`© ${currentYear} Chase Lamkin`}/>
                <SubText className="cursor-default" text="Made with ☕ ☕ ☕"/>
            </div>
        </footer>
        </div>
    );
};

export default Footer;

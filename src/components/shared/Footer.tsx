import React from 'react';
import TextLink from '../ui/TextLink';
import BackgroundGradient from '../ui/BackgroundGradient';
import SubText from '../ui/SubText';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bottom-0 z-50 flex flex-col items-center">
        <footer className="relative w-4/5 md:w-3/4 lg:w-2/3 max-w-150 rounded-t-lg border-t-2 border-l-2 border-r-2 border-border-subtle bg-background py-6 px-12">
            <BackgroundGradient classes='' opacity={.06}/>
            <ul className="flex flex-row flex-wrap justify-between w-full py-2">
                <li className="group relative px-1">
                    <TextLink classes="" text="Home" link=""/>
                </li>
                <li className="group relative px-1">
                    <TextLink classes="" text="Experience" link="#"/>
                </li>
                <li className="group relative px-1">
                    <TextLink classes="" text="Projects" link="#"/>
                </li>
                <li className="group relative px-1">
                    <TextLink classes="" text="Blogs" link="#"/>
                </li>
                <li className="group relative px-1">
                    <TextLink classes="" text="Contact" link="#"/>
                </li>
            </ul>

            {/* Divider line - half width */}
            <div className="flex justify-center my-3">
                <div className="w-3/4 border-t border-border-subtle"></div>
            </div>

            <div className="flex flex-row justify-between text-sm py-2">
                <SubText classes="cursor-default" text={`© ${currentYear} Chase Lamkin`}/>
                <SubText classes="cursor-default" text="Made with ☕ ☕ ☕"/>
            </div>
        </footer>
        </div>
    );
};

export default Footer;

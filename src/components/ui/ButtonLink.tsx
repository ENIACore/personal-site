import Link from 'next/link';
import React from 'react';
import BackgroundGradient from './BackgroundGradient';

interface ButtonLinkProps {
    text: string
    link: string
    className?: string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const ButtonLink: React.FC<ButtonLinkProps> = ({text, link, className}) => {
    return (
        <Link
            href={link}
            className={`${className} relative inline-block pt-1 px-2 text-base font-semibold text-foreground-neutral bg-background-primary rounded-lg transition-colors duration-300 cursor-pointer hover:bg-background-muted xs:text-sm`}
        >
            <BackgroundGradient className="rounded-lg" opacity={.06}/>
            {text}
        </Link>
    );
};
export default ButtonLink;

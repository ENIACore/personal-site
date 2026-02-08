import Link from 'next/link';
import React from 'react';
import BackgroundGradient from './BackgroundGradient';

interface ButtonLinkProps {
    text: string
    link: string
    linkClasses: string
    buttonClasses: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const ButtonLink: React.FC<ButtonLinkProps> = ({text, link, linkClasses, buttonClasses}) => {
    return (
        <button className={`${buttonClasses} relative text-base xs:text-sm font-semi-bold text-foreground-neutral pt-1 px-2 rounded-lg cursor-pointer bg-background-primary hover:bg-background-muted transition-colors duration-300`}>
            <BackgroundGradient classes='' opacity={.06}/>
            <Link href={link} className={`${linkClasses}`}>
                {text}
            </Link>
        </button>
    );
};
export default ButtonLink;

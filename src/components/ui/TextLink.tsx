import React from 'react';
import Link from 'next/link';

interface TextLinkProps {
    text: string
    className?: string
    link: string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const TextLink: React.FC<TextLinkProps> = ({text, className, link}) => {
    return (
        <Link
            href={link}
            className={`${className} text-base font-normal text-foreground cursor-pointer hover:text-foreground-muted xs:text-sm`}
        >
        {text}
        </Link>
    );
};
export default TextLink;

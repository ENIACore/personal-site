import React from 'react';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/src/constants/socials';

interface SocialLinksProps {
    className?: string;
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
    return (
        <div className={`flex flex-row justify-center ${className}`}>
            {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                    <Link
                        key={social.name}
                        href={social.url}
                        className="m-2 cursor-pointer"
                        aria-label={social.name}
                    >
                        <Icon />
                    </Link>
                );
            })}
        </div>
    );
};

export default SocialLinks;

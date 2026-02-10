import React from 'react';
import Link from 'next/link';
import TextLink from '@/src/components/ui/TextLink';
import Heading from '@/src/components/ui/Heading';


interface SocialProps {
    icon: React.ReactNode
    social: string
    link: string
    tag: string
    className?: string
}

const Social: React.FC<SocialProps> = ({icon, social, link, tag, className}) => {

    return (
        <div className={`${className} flex flex-col`}>
            <Heading className="text-center" title={social} size='lg'/>
            <div className="flex flex-row">
                <Link href={link} aria-label={`link to ${social}`}>{icon}</Link>
                <TextLink className='ml-4 text-foreground-muted' link={link} text={tag}/>
            </div>
        </div>
    );
};

export default Social;

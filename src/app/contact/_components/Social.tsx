import React from 'react';
import Link from 'next/link';
import SubSectionTitle from '@/src/components/ui/SubSectionTitle';
import TextLink from '@/src/components/ui/TextLink';


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
            <SubSectionTitle className="font-semibold text-center" title={social}/>
            <div className="flex flex-row">
                <Link href={link} aria-label={`link to ${social}`}>{icon}</Link>
                <TextLink className='ml-4 text-foreground-muted' link={link} text={tag}/>
            </div>
        </div>
    );
};

export default Social;

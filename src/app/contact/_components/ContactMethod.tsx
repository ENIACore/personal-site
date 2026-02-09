import React from 'react';
import Link from 'next/link';
import SubSectionTitle from '@/src/components/ui/SubSectionTitle';
import TextLink from '@/src/components/ui/TextLink';


interface ContactMethodProps {
    icon: React.ReactNode
    social: string
    link: string
    tag: string
    className?: string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const ContactMethod: React.FC<ContactMethodProps> = ({icon, social, link, tag, className}) => {

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

export default ContactMethod;




/*
                <SubSectionTitle className="font-semibold" title="Email"/>
                <TextLink text=''/>
*/

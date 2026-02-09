import React from 'react';
import Link from 'next/link';
import SectionTitle from '@/src/components/ui/SectionTitle';
import Paragraph from '@/src/components/ui/Paragraph';
import LinkedinIcon from '@/src/components/icons/LinkedinIcon';
import GithubIcon from '@/src/components/icons/GithubIcon';
import EmailIcon from '@/src/components/icons/EmailIcon';
import TwitterIcon from '@/src/components/icons/TwitterIcon';
import SubText from '@/src/components/ui/SubText';
import SubSectionTitle from '@/src/components/ui/SubSectionTitle';
import TextLink from '@/src/components/ui/TextLink';
import ContactMethod from './ContactMethod';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const ContactSectionContent: React.FC = () => {
    return (
        <div className="flex flex-col items-center px-4">
            <SectionTitle className="text-center !my-4" title="Contact Me"/>
            <Paragraph
                className="text-center max-w-lg my-4"
                text="I'm always open to discussing new opportunities, collaborations, or simply having a coffee chat."
            />

            <div className="flex flex-col items-center">
                <ContactMethod icon={<EmailIcon />} social='Email' link='mailto:contact@lamkin.dev' tag='contact@lamkin.dev' className='my-4'/>
                <ContactMethod icon={<LinkedinIcon />} social='LinkedIn'link='https://www.linkedin.com/in/chaselamkin/' tag='@chaselamkin' className='my-4'/>
                <ContactMethod icon={<TwitterIcon />} social='Twitter' link='https://x.com/ENIACore' tag='@ENIACore' className='my-4'/>
            </div>

            <Paragraph
                className="text-center max-w-md italic !my-4"
                text="I'm most active on email and typically respond within 24-48 hours. Looking forward to connecting!"
            />
        </div>
    );
};
export default ContactSectionContent;

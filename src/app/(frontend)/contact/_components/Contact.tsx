import React from 'react';
import LinkedinIcon from '@/src/components/icons/LinkedinIcon';
import EmailIcon from '@/src/components/icons/EmailIcon';
import TwitterIcon from '@/src/components/icons/TwitterIcon';
import Social from './Social';
import Text from '@/src/components/ui/Text';

const Contact: React.FC = () => {
    return (
        <>
            <Text className="text-center max-w-lg mb-4 mx-auto" text="I'm always open to discussing new opportunities, collaborations, or simply having a coffee chat." size='bs'/>

            <div className="flex flex-col items-center">
                <Social icon={<EmailIcon />} social='Email' link='mailto:contact@lamkin.dev' tag='contact@lamkin.dev' className='my-4'/>
                <Social icon={<LinkedinIcon />} social='LinkedIn'link='https://www.linkedin.com/in/chaselamkin/' tag='@chaselamkin' className='my-4'/>
                <Social icon={<TwitterIcon />} social='Twitter' link='https://x.com/ENIACore' tag='@ENIACore' className='my-4'/>
            </div>

            <Text className="text-center max-w-md italic mt-4 mx-auto" text="I'm most active on email and typically respond within 24-48 hours. Looking forward to connecting!" size='bs'/>
        </>
    );
};
export default Contact;

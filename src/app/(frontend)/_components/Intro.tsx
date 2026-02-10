import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Text from '@/src/components/ui/Text';
import { SOCIAL_LINKS } from '@/src/constants/socials';
import Heading from '@/src/components/ui/Heading';

const Intro: React.FC = () => {
    return (
        <>
            <div className="flex flex-row justify-center">
                <Image
                    src="/images/profile/chase-lamkin-pfp.jpeg"
                    alt="Chase Lamkin profile picture"
                    height={150}
                    width={150}
                    priority
                    className="h-auto rounded-full border-2 border-border"
                />
            </div>

            <div className="flex flex-row justify-center">
                <Text className="italic" text="@ENIACore" size='xs'/>
            </div>

            <div className="flex flex-row justify-center">
                <Heading className='' title='Chase Lamkin' size='xl'/>
            </div>

            <div className="flex flex-row justify-center">
            {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                    <Link key={social.name} aria-label={social.name} href={social.url} className="m-2 cursor-pointer">
                        <Icon/>
                    </Link>
                );
            })}
            </div>

            <div className="flex flex-row justify-center">
                <Text className='text-center' text="Hi, I'm Chase! I'm a software engineer with ~3 YOE and a love for building things. I built this site to share my passion projects and opinions on the industry." size='bs'/>
            </div>
        </>
    );
};

export default Intro;

import Paragraph from '@/src/components/ui/Paragraph';
import SectionTitle from '@/src/components/ui/SectionTitle';
import Image from 'next/image';
import React from 'react';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const AboutSectionContent: React.FC = () => {
    return (
        <div className="flex flex-col">
            <SectionTitle classes="" title='About Me'/>
            <div className="flex flex-col">
                <div className="flex flex-col w-full">
                    <Paragraph classes="mb-4" text="Outside of being a software engineer I'm also an Engineer Officer (12A) in the Army National Guard and an avid lifter. I believe my military experience allows me to approach problems outside of a purely engineering angle. It's also helped me to appreciate the team aspect of engineering - I am always open to projects with other developers!"/>
                    <Paragraph classes="mb-4" text="My main hobby, besides staying active, is coding. Recently I am obsessed with creating software to manage my server, but I have a variety of personal projects I have created in my spare time. All of my personal code is on my Github and free for anyone to use. ☺"/>
                </div>
                <div className="flex flex-row w-full items-center justify-around my-4">
                    <Image
                        src="/images/icons/software-eng-icon.png"
                        alt="Software Engineer Icon"
                        height={100}
                        width={100}
                        className="rounded-lg h-20 w-auto"
                        unoptimized
                    />
                    <Image
                        src="/images/icons/army-icon.png"
                        alt="Software Engineer Icon"
                        height={100}
                        width={100}
                        className="rounded-lg h-20 w-auto"
                        unoptimized
                    />
                    <Image
                        src="/images/icons/lifter-icon.png"
                        alt="Software Engineer Icon"
                        height={100}
                        width={100}
                        className="rounded-lg h-20 w-auto"
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSectionContent;

import Paragraph from '@/src/components/ui/Paragraph';
import SectionTitle from '@/src/components/ui/SectionTitle';
import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex flex-col">
            <SectionTitle title='About Me'/>
            <div className="flex flex-col">
                <div className="flex flex-col w-full">
                    <Paragraph className="mb-4" text="Beyond being a software engineer, I'm an Engineer Officer (12A) in the Army National Guard and an avid lifter. My military background has given me a broader perspective on problem solving and deepened my appreciation for the teamwork in engineering. I'm always open to projects with other developers!"/>
                    <Paragraph className="mb-4" text="Coding isn't just my job; it's also how I spend most of my free time when I'm not staying active. My recent obsession is creating software to manage my home server, but I also have a variety of other personal projects. All my projects are on my GitHub and open source. ☺"/>
                </div>
                <div className="flex flex-row items-center justify-around my-4 w-full">
                    <Image
                        src="/images/icons/software-eng-icon.png"
                        alt="Software Engineer Icon"
                        height={100}
                        width={100}
                        className="h-20 w-auto rounded-lg"
                    />
                    <Image
                        src="/images/icons/army-icon.png"
                        alt="Software Engineer Icon"
                        height={100}
                        width={100}
                        className="h-20 w-auto rounded-lg"
                    />
                    <Image
                        src="/images/icons/lifter-icon.png"
                        alt="Software Engineer Icon"
                        height={100}
                        width={100}
                        className="h-20 w-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

import React from 'react';
import Image from 'next/image';
import Text from '@/src/components/ui/Text';

const About: React.FC = () => {
    return (
        <>
            <Text className='mb-4' text="Beyond being a software engineer, I'm an Engineer Officer (12A) in the Army National Guard and an avid lifter. My military background has given me a broader perspective on problem solving and deepened my appreciation for the teamwork in engineering. I'm always open to projects with other developers!" size='bs'/>
            <Text className='' text="Coding isn't just my job; it's also how I spend most of my free time when I'm not staying active. My recent obsession is creating software to manage my home server, but I also have a variety of other personal projects. All my projects are on my GitHub and open source." size='bs'/>

            <div className="flex flex-row items-center justify-around mt-4">
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
        </>
    );
};

export default About;

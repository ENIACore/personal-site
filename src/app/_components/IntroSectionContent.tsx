import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TwitterIcon from '@/src/components/ui/TwitterIcon';
import LinkedinIcon from '@/src/components/ui/LinkedinIcon';
import GithubIcon from '@/src/components/ui/GithubIcon';
import EmailIcon from '@/src/components/ui/EmailIcon';
import Paragraph from '@/src/components/ui/Paragraph';
import SubText from '@/src/components/ui/SubText';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const IntroSectionContent: React.FC = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row justify-center mt-2">
                    <Image
                        src="/images/profile/chase-lamkin-pfp.jpeg"
                        alt="Chase Lamkin profile picture"
                        height={150}
                        width={150}
                        className="h-auto rounded-full border-2 border-border"
                    />
                </div>
                <div className="flex flex-row justify-center">
                    <SubText classes="italic" text="@ENIACore"/>
                </div>
                <div className="flex flex-row justify-center">
                    <h1 className="text-3xl font-bold text-foreground">Chase Lamkin</h1>
                </div>
                <div className="flex flex-row justify-center">
                    <Link href="https://www.linkedin.com/in/chaselamkin/" className="m-2 cursor-pointer">
                        <LinkedinIcon/>
                    </Link>
                    <Link href="https://github.com/ENIACore" className="m-2 cursor-pointer">
                        <GithubIcon/>
                    </Link>
                    <Link href="https://x.com/ENIACore" className="m-2 cursor-pointer">
                        <TwitterIcon/>
                    </Link>
                    <Link href="mailto:contact@lamkin.dev" className="m-2 cursor-pointer">
                        <EmailIcon/>
                    </Link>
                </div>
                <div className="flex flex-row justify-center mt-2 mb-2">
                <Paragraph classes="text-center" text="Hi, I'm Chase. I'm a Software Engineer with ~3 YOE & a passion for creating things. I built this site to share my passion projects & opinions on the industry."/>
                </div>
            </div>
        </>
    );
};

export default IntroSectionContent;

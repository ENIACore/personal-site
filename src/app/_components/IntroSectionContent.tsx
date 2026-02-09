import React from 'react';
import Image from 'next/image';
import Paragraph from '@/src/components/ui/Paragraph';
import SubText from '@/src/components/ui/SubText';
import SocialLinks from '@/src/components/shared/SocialLinks';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
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
                        priority
                        className="h-auto rounded-full border-2 border-border"
                    />
                </div>
                <div className="flex flex-row justify-center">
                    <SubText className="italic" text="@ENIACore"/>
                </div>
                <div className="flex flex-row justify-center">
                    <h1 className="text-3xl font-bold text-foreground">Chase Lamkin</h1>
                </div>
                <SocialLinks />
                <div className="flex flex-row justify-center mt-2 mb-2">
                <Paragraph className="text-center" text="Hi, I'm Chase! I'm a software engineer with ~3 YOE and a love for building things. I built this site to share my passion projects and opinions on the industry."/>
                </div>
            </div>
        </>
    );
};

export default IntroSectionContent;

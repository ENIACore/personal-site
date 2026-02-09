import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import Section from '../components/layout/Section';
import IntroSectionContent from './_components/IntroSectionContent';
import AboutSectionContent from './_components/AboutSectionContent';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const Page: React.FC = () => {
    return (
        <main className="py-8">
            <SectionWrapper>
                <Section>
                    <IntroSectionContent/>
                </Section>
                <Section>
                    <AboutSectionContent/>
                </Section>
            </SectionWrapper>
        </main>
    );
}

export default Page

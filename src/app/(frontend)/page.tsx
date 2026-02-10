import React from 'react';
import SectionWrapper from '@/src/components/layout/SectionWrapper';
import Section from '@/src/components/layout/Section';
import Intro from './_components/Intro';
import About from './_components/About';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const Page: React.FC = () => {
    return (
        <SectionWrapper>
            <Section>
                <Intro/>
            </Section>
            <Section title='About Me'>
                <About/>
            </Section>
        </SectionWrapper>
    );
}

export default Page

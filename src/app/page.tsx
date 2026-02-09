import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import Section from '../components/layout/Section';
import Intro from './_components/Intro';
import About from './_components/About';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const Page: React.FC = () => {
    return (
        <main className="py-8">

            <SectionWrapper>

                <Section>
                    <Intro/>
                </Section>

                <Section>
                    <About/>
                </Section>

            </SectionWrapper>

        </main>
    );
}

export default Page

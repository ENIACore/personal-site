import React from 'react';
import SectionWrapper from '@/src/components/layout/SectionWrapper';
import Section from '@/src/components/layout/Section';
import Intro from './_components/Intro';
import Job from './_components/Job';
import { jobs } from './_data/jobs';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const ExperiencePage: React.FC = () => {
    return (
        <SectionWrapper>

            <Section title='My Journey'>
                <Intro/>
            </Section>

            {jobs.map((job, index) => (
            <Section key={index}>
                <Job {...job} />
            </Section>
            ))}

        </SectionWrapper>
    );
}

export default ExperiencePage;

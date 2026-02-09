import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import Intro from './_components/Intro';
import Job from './_components/Job';
import { jobs } from './_data/jobs';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const ExperiencePage: React.FC = () => {
    return (
        <main className="py-8">
            <SectionWrapper>

                <Section>
                    <Intro/>
                </Section>

                {jobs.map((job, index) => (
                <Section key={index}>
                    <Job {...job} />
                </Section>
                ))}

            </SectionWrapper>
        </main>
    );
}

export default ExperiencePage;

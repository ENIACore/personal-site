import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import ExperienceSectionContent from './_components/ExperienceSectionContent';
import WorkExperience from './_components/WorkExperience';
import { workExperiences } from './_data/workExperienceData';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const ExperiencePage: React.FC = () => {
    return (
        <main className="py-8">
            <SectionWrapper>
                <Section>
                    <ExperienceSectionContent/>
                </Section>
                {workExperiences.map((experience, index) => (
                    <Section key={index}>
                        <WorkExperience {...experience} />
                    </Section>
                ))}
            </SectionWrapper>
        </main>
    );
}

export default ExperiencePage;

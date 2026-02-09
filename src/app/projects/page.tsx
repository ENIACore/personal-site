import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import Intro from './_components/Intro';
import Preview from './_components/Preview';
import PreviewList from './_components/PreviewList';
import { projects } from './_data/projectData';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const ProjectsPage: React.FC = () => {
    return (
        <SectionWrapper>

            <Section>
                <Intro/>
            </Section>

            <Section>
                <PreviewList>
                {projects.map((project, index) => (
                    <Preview key={index} {...project} />
                ))}
                </PreviewList>
            </Section>

        </SectionWrapper>
    );
}

export default ProjectsPage;

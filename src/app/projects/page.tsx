import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import IntroSectionContent from './_components/IntroSectionContent';
import ProjectPreview from './_components/ProjectPreview';
import PreviewWrapper from './_components/PreviewWrapper';
import { projects } from './_data/projectData';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const ProjectsPage: React.FC = () => {
    return (
        <main className="py-8">
            <SectionWrapper>
                <Section>
                    <IntroSectionContent/>
                </Section>
                <Section>
                    <PreviewWrapper>
                        {projects.map((project, index) => (
                            <ProjectPreview key={index} {...project} />
                        ))}
                    </PreviewWrapper>
                </Section>
            </SectionWrapper>
        </main>
    );
}

export default ProjectsPage;

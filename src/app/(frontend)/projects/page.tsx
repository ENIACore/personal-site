// Requires dynamic rendering due to reliance on payload data
export const dynamic = 'force-dynamic'

import React from 'react';
import SectionWrapper from '@/src/components/layout/SectionWrapper';
import Section from '@/src/components/layout/Section';
import Intro from './_components/Intro';
import Preview from './_components/Preview';

import { getPayload } from 'payload'
import config from '@payload-config'
import type { Media } from '@/src/payload-types';

async function ProjectsPage(): Promise<React.ReactNode> {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'projects',
        depth: 1,
        sort: 'order',
    })
    const projects = docs

    return (
        <SectionWrapper>

            <Section title='My Projects'>
                <Intro/>
            </Section>

            <Section title='Projects'>
            {projects.map((project, index) => {
                const thumbnail = project.thumbnail as Media;
                return (
                    <Preview
                        key={index}
                        name={project.name}
                        description={project.description}
                        url={thumbnail.url ?? ''}
                        alt={thumbnail.alt}
                        github={project.github ?? undefined}
                        view={project.view ?? undefined}
                        technologies={project.technologies ? [...project.technologies] : undefined}
                    />
                );
            })}
            </Section>

        </SectionWrapper>
    );
}

export default ProjectsPage;

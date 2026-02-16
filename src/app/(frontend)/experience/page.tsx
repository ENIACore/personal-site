// Requires dynamic rendering due to reliance on payload data
export const dynamic = 'force-dynamic'

import React from 'react';
import SectionWrapper from '@/src/components/layout/SectionWrapper';
import Section from '@/src/components/layout/Section';
import Intro from './_components/Intro';
import Job from './_components/Job';

import { getPayload } from 'payload'
import config from '@payload-config'
import type { Media } from '@/src/payload-types';


async function ExperiencePage(): Promise<React.ReactNode> {

    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'jobs',
        depth: 1,
        sort: 'order',
    })
    const jobs = docs

    return (
        <SectionWrapper>

            <Section title='My Journey'>
                <Intro/>
            </Section>

            {jobs.map((job, index) => {
                const logo = job.logo as Media
                return (
                    <Section key={index}>
                        <Job company={job.company} jobTitle={job.title} startDate={job.startDate} endDate={job.endDate} technologies={job.technologies ? [...job.technologies] : undefined} logo={logo.url ?? ''} alt={logo.alt} accomplishments={job.accomplishments}/>
                    </Section>
                );
            })}

        </SectionWrapper>
    );
}

export default ExperiencePage;

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

async function BlogsPage(): Promise<React.ReactNode> {

    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'blogs',
        depth: 1,
        sort: 'order',
    })
    const blogs = docs

    return (
        <SectionWrapper>

            <Section title='My Blogs'>
                <Intro/>
            </Section>

            {blogs.map((blog, index) => {
                const thumbnail = blog.thumbnail as Media;
                return (
                    <Section title={blog.title} key={index}>
                        <Preview  description={blog.description} url={thumbnail.url ?? ''} alt={thumbnail.alt} view={blog.view ?? '#'}/>
                    </Section>
                );
            })}

        </SectionWrapper>
    );
}

export default BlogsPage;

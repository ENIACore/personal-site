import React from 'react';
import SectionWrapper from '@/src/components/layout/SectionWrapper';
import Section from '@/src/components/layout/Section';
import Intro from './_components/Intro';
import Preview from './_components/Preview';
import { blogs } from './_data/blogs';

const BlogsPage: React.FC = () => {
    return (
        <SectionWrapper>

            <Section title='My Blogs'>
                <Intro/>
            </Section>

            {blogs.map((blog, index) => (
            <Section title={blog.title} key={index}>
                <Preview {...blog} />
            </Section>
            ))}

        </SectionWrapper>
    );
}

export default BlogsPage;

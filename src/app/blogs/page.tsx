import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import Intro from './_components/Intro';
import Preview from './_components/Preview';
import { blogs } from './_data/blogs';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const BlogsPage: React.FC = () => {
    return (
        <main className="mt-auto">
            <SectionWrapper>

                <Section>
                    <Intro/>
                </Section>

                {blogs.map((blog, index) => (
                <Section key={index}>
                    <Preview {...blog} />
                </Section>
                ))}

            </SectionWrapper>
        </main>
    );
}

export default BlogsPage;

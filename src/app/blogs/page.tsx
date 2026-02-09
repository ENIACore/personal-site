import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import IntroSectionContent from './_components/IntroSectionContent';
import BlogPreview from './_components/BlogPreview';
import { blogs } from './_data/blogData';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const BlogsPage: React.FC = () => {
    return (
        <main className="py-8">
            <SectionWrapper>
                <Section>
                    <IntroSectionContent/>
                </Section>
                {blogs.map((blog, index) => (
                    <Section key={index}>
                        <BlogPreview {...blog} />
                    </Section>
                ))}
            </SectionWrapper>
        </main>
    );
}

export default BlogsPage;

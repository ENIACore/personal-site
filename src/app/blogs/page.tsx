import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import Navbar from '../../components/shared/Navbar';
import Footer from '@/src/components/shared/Footer';
import IntroSectionContent from './_components/IntroSectionContent';
import BlogPreview from './_components/BlogPreview';
import { blogs } from './_data/blogData';

const BlogsPage: React.FC = () => {
    return (
        <>
            <Navbar/>
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
            <Footer/>
        </>
    );
}

export default BlogsPage;

import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import Section from '../components/layout/Section';
import Navbar from '../components/shared/Navbar';
import IntroSectionContent from './_components/IntroSectionContent';
import AboutSectionContent from './_components/AboutSectionContent';
import Footer from '../components/shared/Footer';

const Page: React.FC = () => {
    return (
        <>
            <Navbar/>
            <main className="py-8">
                <SectionWrapper>
                    <Section>
                        <IntroSectionContent/>
                    </Section>
                    <Section>
                        <AboutSectionContent/>
                    </Section>
                </SectionWrapper>
            </main>
            <Footer/>
        </>
    );
}

export default Page

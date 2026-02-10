import React from 'react';
import SectionWrapper from '@/src/components/layout/SectionWrapper';
import Section from '@/src/components/layout/Section';
import Contact from './_components/Contact';

const ContactPage: React.FC = () => {
    return (
        <SectionWrapper>

            <Section title='Contact Me' center={true}>
                <Contact/>
            </Section>

        </SectionWrapper>
    );
}

export default ContactPage;

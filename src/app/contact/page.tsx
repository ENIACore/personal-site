import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import Contact from './_components/Contact';

const ContactPage: React.FC = () => {
    return (
        <SectionWrapper>

            <Section>
                <Contact/>
            </Section>

        </SectionWrapper>
    );
}

export default ContactPage;

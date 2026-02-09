import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import ContactSectionContent from './_components/ContactSectionContent';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const ContactPage: React.FC = () => {
    return (
        <main className="my-auto">
            <SectionWrapper>
                <Section>
                    <ContactSectionContent/>
                </Section>
            </SectionWrapper>
        </main>
    );
}

export default ContactPage;

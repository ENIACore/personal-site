import Paragraph from '@/src/components/ui/Paragraph';
import SectionTitle from '@/src/components/ui/SectionTitle';
import React from 'react';
// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const IntroSectionContent: React.FC = () => {
    return (
        <div className="flex flex-col">
            <SectionTitle title='My Blogs'/>
            <Paragraph className="mb-4" text="Below is a collection of blog posts covering my thoughts on the software industry, emerging technologies, and current events."/>
            <Paragraph text="Note: Blog section is currently under development and coming soon!"/>
        </div>
    );
};

export default IntroSectionContent;

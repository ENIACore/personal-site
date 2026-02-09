import Paragraph from '@/src/components/ui/Paragraph';
import SectionTitle from '@/src/components/ui/SectionTitle';
import React from 'react';
// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const IntroSectionContent: React.FC = () => {
    return (
        <div className="flex flex-col">
            <SectionTitle classes="" title='My Blogs'/>
            <Paragraph classes="mb-4" text="Below is a collection of blog posts covering my thoughts on the software industry, emerging technologies, and current events."/>
            <Paragraph classes="" text="Note: Blog section is currently under development and coming soon!"/>
        </div>
    );
};

export default IntroSectionContent;

import Paragraph from '@/src/components/ui/Paragraph';
import SectionTitle from '@/src/components/ui/SectionTitle';
import React from 'react';
// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const IntroSectionContent: React.FC = () => {
    return (
        <div className="flex flex-col">
            <SectionTitle classes="" title='My Blogs'/>
            <Paragraph classes="mb-4" text="Below you'll find a collection of my blogs about my opinions on the industry, new tech, and current events."/>
            <Paragraph classes="" text="My blogs are still in TODO status, coming soon!"/>
        </div>
    );
};

export default IntroSectionContent;

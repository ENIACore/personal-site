import Paragraph from '@/src/components/ui/Paragraph';
import SectionTitle from '@/src/components/ui/SectionTitle';
import React from 'react';
// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const IntroSectionContent: React.FC = () => {
    return (
        <div className="flex flex-col">
            <SectionTitle classes="" title='My Projects'/>
            <Paragraph classes="" text="Below is a collection of projects I've built and am proud to share. They're all open source and free to use, with some including links to comprehensive documentation (such as Go docs) hosted on this domain."/>
        </div>
    );
};

export default IntroSectionContent;

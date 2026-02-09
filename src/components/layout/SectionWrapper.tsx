import React from 'react';
import Section from './Section';

interface SectionWrapperProps {
    children: React.ReactNode;
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const SectionWrapper: React.FC<SectionWrapperProps> = ({children}) => {
    return (
        <div className="flex flex-col items-center">
        {children}
        </div>
    );
};

export default SectionWrapper;

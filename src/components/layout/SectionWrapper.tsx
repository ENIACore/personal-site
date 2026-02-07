import React from 'react';
import Section from './Section';
import Gradient from '../shared/Gradient';
//import Image from 'next/image';

interface SectionWrapperProps {
    children: React.ReactElement<typeof Section> | React.ReactElement<typeof Section>[];
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const SectionWrapper: React.FC<SectionWrapperProps> = ({children}) => {
    return (
        <div className="flex flex-col items-center">
        {children}
        </div>
    );
};

export default SectionWrapper;

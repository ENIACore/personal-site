import React from 'react';
import Gradient from '../shared/Gradient';
//import Image from 'next/image';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Section: React.FC = () => {
    return (
        <div className="h-80 w-4/5 md:w-3/4 lg:w-2/3 max-w-150 mt-4 mb-4 rounded-lg bg-neutral-300">
        Section test
        </div>
    );
};

export default Section;

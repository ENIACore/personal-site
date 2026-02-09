import React from 'react';
import BackgroundGradient from '../ui/BackgroundGradient';

interface SectionProps {
    className?: string;
    children: React.ReactElement | React.ReactElement[];
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const Section: React.FC<SectionProps> = ({className, children}) => {
    return (
        <div className={`${className} relative mt-4 mb-4 p-4 w-4/5 max-w-150 bg-background rounded-lg md:w-3/4 lg:w-2/3`}>
            <BackgroundGradient className="rounded-lg" opacity={.06}/> 
            {children}
        </div>
    );
};

export default Section;

import React from 'react';
import SectionTitle from '@/src/components/ui/SectionTitle';

interface PreviewWrapperProps {
    children: React.ReactNode;
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const PreviewWrapper: React.FC<PreviewWrapperProps> = ({children}) => {
    return (
        <div className='flex flex-col'>
            <SectionTitle title='Projects'/>
            {children}
        </div>
    );
};

export default PreviewWrapper;

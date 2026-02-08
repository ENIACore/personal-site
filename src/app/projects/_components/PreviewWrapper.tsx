import React from 'react';
import SectionTitle from '@/src/components/ui/SectionTitle';

interface PreviewWrapperProps {
    children: React.ReactNode;
}

const PreviewWrapper: React.FC<PreviewWrapperProps> = ({children}) => {
    return (
        <div className='flex flex-col'>
            <SectionTitle classes='' title='Projects'/>
            {children}
        </div>
    );
};

export default PreviewWrapper;

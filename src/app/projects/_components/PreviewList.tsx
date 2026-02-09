import React from 'react';
import SectionTitle from '@/src/components/ui/SectionTitle';

interface PreviewListProps {
    children: React.ReactNode;
}

const PreviewList: React.FC<PreviewListProps> = ({children}) => {
    return (
        <div className='flex flex-col'>
            <SectionTitle title='Projects'/>
            {children}
        </div>
    );
};

export default PreviewList;

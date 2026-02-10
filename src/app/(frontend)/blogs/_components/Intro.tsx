import Text from '@/src/components/ui/Text';
import React from 'react';

const Intro: React.FC = () => {
    return (
        <>
            <Text className='mb-4' text="Below is a collection of blog posts covering my thoughts on the software industry, emerging technologies, and current events." size='bs'/>
            <Text className='' text="Note: Blog section is currently under development and coming soon!" size='bs'/>
        </>
    );
};

export default Intro;

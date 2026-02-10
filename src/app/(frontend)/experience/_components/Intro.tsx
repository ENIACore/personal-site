import React from 'react';
import { Route } from 'lucide-react';
import Text from '@/src/components/ui/Text';

const Intro: React.FC = () => {
    return (
        <>
            <Route size={32} className="absolute top-8 right-8 text-foreground-secondary"/>

            <Text className='mb-4' text="I've been a Software Engineer for almost 4 years. I started my career at the UWF Cybersecurity Center while still in school, where I wore many hats in a startup-like environment. I was responsible for most aspects of a 3,000+ user site, from infrastructure to design." size="bs"/>
            <Text className='' text="After graduation, I joined IBM, where I currently work on large-scale systems for Medi-Cal. This role gave me experience with enterprise development and cross-team coordination on systems serving millions of users." size="bs"/>
        </>
    );
};

export default Intro;

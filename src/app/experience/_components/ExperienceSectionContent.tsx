import Paragraph from '@/src/components/ui/Paragraph';
import SectionTitle from '@/src/components/ui/SectionTitle';
import { Route } from 'lucide-react';
import React from 'react';

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const ExperienceSectionContent: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
                <SectionTitle title='My Journey'/>
                <Route size={32} className="text-foreground-secondary"/>
            </div>
            <Paragraph className="mb-4" text="I've been a Software Engineer for almost 4 years. I started my career at the UWF Cybersecurity Center while still in school, where I wore many hats in a startup-like environment. I was responsible for most aspects of a 3,000+ user site, from infrastructure to design."/>
            <Paragraph className="mb-4" text="After graduation, I joined IBM, where I currently work on large-scale systems for Medi-Cal. This role gave me experience with enterprise development and cross-team coordination on systems serving millions of users."/>
        </div>
    );
};

export default ExperienceSectionContent;

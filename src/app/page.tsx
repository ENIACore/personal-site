import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import Section from '../components/layout/Section';
import Navbar from '../components/shared/Navbar';

const Page: React.FC = () => {
    return (
        <>
            <Navbar/>
            {/* Temporary main element */}

            <SectionWrapper>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
            </SectionWrapper>
            {/* Main element */}
            {/* Footer element */}
        </>
    );
}

/*
Page background: --color-neutral-100 (#f9f7f4)
Card background: --color-neutral-50 (#fdfcfa)
Dark Mode:
Page background: --color-neutral-950 (#1a1816)
Card background: --color-neutral-900 (#2c2825)
            <div className="h-screen bg-red-900"/>
            <div className="h-screen bg-red-900"/>
            <div className="h-screen bg-red-900"/>
*/

export default Page

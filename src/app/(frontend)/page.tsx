// Requires dynamic rendering due to reliance on payload data
export const dynamic = 'force-dynamic'

import React from 'react';
import SectionWrapper from '@/src/components/layout/SectionWrapper';
import Section from '@/src/components/layout/Section';
import Intro from './_components/Intro';
import About from './_components/About';

import { getPayload } from 'payload'
import config from '@payload-config'

async function Page(): Promise<React.ReactNode> {

    const payload = await getPayload({ config })
    const socials = await payload.findGlobal({
        slug: 'social-links',
    })

    const linkedin = (socials.linkedin && socials.linkedin !== '#' ? `https://www.linkedin.com/in/${socials.linkedin}/` : '#')
    const github = (socials.github && socials.github !== '#' ? `https://github.com/${socials.github}` : '#')
    const twitter = (socials.twitter && socials.twitter !== '#' ? `https://x.com/${socials.twitter}` : '#')
    const email = (socials.email && socials.email !== '#' ? `mailto:${socials.email}` : '#')

    return (
        <SectionWrapper>
            <Section>
                <Intro linkedin={linkedin} github={github} twitter={twitter} email={email}/>
            </Section>
            <Section title='About Me'>
                <About/>
            </Section>
        </SectionWrapper>
    );
}

export default Page

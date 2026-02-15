import React from 'react';
import SectionWrapper from '@/src/components/layout/SectionWrapper';
import Section from '@/src/components/layout/Section';
import Contact from './_components/Contact';

import { getPayload } from 'payload'
import config from '@payload-config'

async function ContactPage(): Promise<React.ReactNode> {

    const payload = await getPayload({ config })
    const socials = await payload.findGlobal({
        slug: 'social-links',
    })

    const email = socials.email ? socials.email : 'example@mail.com';
    const linkedin = socials.linkedin ? socials.linkedin : 'linkedin-username';
    const twitter = socials.twitter ? socials.twitter : 'twitter-username';

    return (
        <SectionWrapper>

            <Section title='Contact Me' center={true}>
                <Contact email={email} linkedin={linkedin} twitter={twitter}/>
            </Section>

        </SectionWrapper>
    );
}

export default ContactPage;

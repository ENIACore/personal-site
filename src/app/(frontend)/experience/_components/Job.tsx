import React from 'react';
import Image from 'next/image';
import Badge from '@/src/components/ui/Badge';
import BulletList from '@/src/components/ui/BulletList';
import Heading from '@/src/components/ui/Heading';

interface WorkExperienceProps {
    companyLogo: string;
    companyName: string;
    logoClasses: string;
    jobTitle: string;
    dateRange: string;
    technologies: string[];
    accomplishments: string[];
}

const Job: React.FC<WorkExperienceProps> = ({
    companyLogo,
    companyName,
    logoClasses,
    jobTitle,
    dateRange,
    technologies,
    accomplishments
}) => {
    return (
        <>
            <Image
                src={companyLogo}
                alt={`${companyName} Logo`}
                width={56}
                height={56}
                className={`${logoClasses} absolute top-8 right-4 h-14 md:h-18.75 w-auto`}
            />
            <Heading className='' title={companyName} size='xl'/>
            <Heading className='' title={jobTitle} size='lg'/>
            <Heading className='' title={dateRange} size='bs'/>

            <div>
            {technologies.map((tech, index) => (
                <Badge key={index} className="my-2 mr-2" text={tech}/>
            ))}
            </div>

            <BulletList
                items={accomplishments}
                className=""
            />

        </>
    );
};

export default Job;

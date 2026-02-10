import React from 'react';
import Image from 'next/image';
import Badge from '@/src/components/ui/Badge';
import BackgroundGradient from '@/src/components/ui/BackgroundGradient';
import ButtonLink from '@/src/components/ui/ButtonLink';
import Text from '@/src/components/ui/Text';
import Heading from '@/src/components/ui/Heading';

interface PreviewProps {
    thumbnail: string;
    projectName: string;
    description: string;
    technologies: string[];
    githubLink: string;
    viewMoreLink: string;
}

const Preview: React.FC<PreviewProps> = ({
    thumbnail,
    projectName,
    description,
    technologies,
    githubLink,
    viewMoreLink
}) => {
    return (
        <div className="group relative flex flex-col sm:flex-row sm:h-37.5 rounded-lg overflow-hidden bg-background-emphasis p-4 sm:p-0 m-4">
            <BackgroundGradient className="rounded-lg" opacity={.06}/>
            <Thumbnail thumbnail={thumbnail} projectName={projectName} />
            <Content
                projectName={projectName}
                description={description}
                technologies={technologies}
            />
            <Actions githubLink={githubLink} viewMoreLink={viewMoreLink} />
        </div>
    );
};

const Thumbnail: React.FC<{ thumbnail: string; projectName: string }> = ({ thumbnail, projectName }) => {
    return (
        <div className="flex flex-row justify-center overflow-hidden">
            <div className="w-50 h-50 sm:w-37.5 sm:h-37.5 hover-scale">
                <Image
                    src={thumbnail}
                    alt={`${projectName} thumbnail`}
                    height={200}
                    width={200}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

const Content: React.FC<{ projectName: string; description: string; technologies: string[] }> = ({
    projectName,
    description,
    technologies
}) => {
    return (
        <div className="flex flex-col flex-1 justify-between overflow-hidden">
            <div className="hover-scale mt-4 sm:mt-2 pl-2">
                <Heading className="text-foreground-neutral pointer-events-none" title={projectName} size="md"/>
                <Text className='text-foreground-neutral pointer-events-none' text={description} size='bs'/>
            </div>
            <div className="hover-scale mt-4 sm:mt-auto mb-2 pl-2">
            {technologies.map((tech, index) => (
                <Badge key={index} text={tech} className="mt-1 mr-1"/>
            ))}
            </div>
        </div>
    );
};

const Actions: React.FC<{ githubLink: string; viewMoreLink: string }> = ({ githubLink, viewMoreLink }) => {
    return (
        <>
            {/* Extra small screen: static buttons below content */}
            <div className="sm:hidden flex flex-row flex-wrap mt-2">
                <ButtonLink className='z-10 mr-2 mt-2' text='Github' link={githubLink} size='lg'/>
                <ButtonLink className='z-10 mt-2' text='View More' link={viewMoreLink} size='lg'/>
            </div>
            {/* Small screen and larger: hover overlay */}
            <div className="hidden sm:flex flex-row items-center justify-center absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-neutral-300 opacity-25" />
                <ButtonLink className='z-10 mr-2' text='Github' link={githubLink} size='lg'/>
                <ButtonLink className='z-10' text='View More' link={viewMoreLink} size='lg'/>
            </div>
        </>
    );
};

export default Preview;

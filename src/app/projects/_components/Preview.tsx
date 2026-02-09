import React from 'react';
import Image from 'next/image';
import Paragraph from '@/src/components/ui/Paragraph';
import Badge from '@/src/components/ui/Badge';
import BackgroundGradient from '@/src/components/ui/BackgroundGradient';
import ButtonLink from '@/src/components/ui/ButtonLink';

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
        <div className="group relative flex flex-col my-2 rounded-lg sm:flex-row sm:h-37.5">
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
        <div className="flex flex-row justify-center pt-4 w-full bg-background-emphasis rounded-t-lg sm:w-37.5 sm:h-37.5 sm:shrink-0 sm:rounded-t-none sm:rounded-l-lg sm:pt-0 sm:block">
            <div className="shrink-0 w-50 h-50 rounded-l-lg overflow-hidden sm:w-full sm:h-full">
                <Image
                    src={thumbnail}
                    alt={`${projectName} thumbnail`}
                    height={200}
                    width={200}
                    className="w-full h-full object-cover sm:rounded-l-lg sm:transition-transform sm:duration-300 sm:group-hover:scale-105"
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
        <div className="flex-1 flex flex-col justify-between p-2 bg-background-emphasis overflow-hidden sm:rounded-r-lg">
            <div>
                <h4 className="text-lg font-semibold text-foreground-neutral pointer-events-none sm:transition-transform sm:duration-300 sm:group-hover:scale-105">
                    {projectName}
                </h4>
                <Paragraph
                    className='text-foreground-neutral pointer-events-none sm:transition-transform sm:duration-300 sm:group-hover:scale-105'
                    text={description}
                />
            </div>
            <div className="flex gap-2 mt-2">
                {technologies.map((tech, index) => (
                    <Badge key={index} text={tech} className="sm:transition-transform sm:duration-300 sm:group-hover:scale-105"/>
                ))}
            </div>
        </div>
    );
};

const Actions: React.FC<{ githubLink: string; viewMoreLink: string }> = ({ githubLink, viewMoreLink }) => {
    return (
        <>
            {/* Small screen: static buttons below content */}
            <div className="flex flex-row flex-wrap px-2 pb-2 pt-0 bg-background-emphasis rounded-b-lg sm:px-4 sm:hidden">
                <ButtonLink className='z-10 mr-2 mb-2 text-2xl! xs:text-lg' text='Github' link={githubLink}/>
                <ButtonLink className='z-10 mb-2 text-2xl! xs:text-lg' text='View More' link={viewMoreLink}/>
            </div>
            {/* Large screen: hover overlay */}
            <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:flex">
                <div className="absolute inset-0 bg-neutral-300 opacity-25" />
                <ButtonLink className='z-10 mr-4 text-2xl! xs:text-lg' text='Github' link={githubLink}/>
                <ButtonLink className='z-10 text-2xl! xs:text-lg' text='View More' link={viewMoreLink}/>
            </div>
        </>
    );
};

export default Preview;

import React from 'react';
import Image from 'next/image';
import Paragraph from '@/src/components/ui/Paragraph';
import Badge from '@/src/components/ui/Badge';
import BackgroundGradient from '@/src/components/ui/BackgroundGradient';
import ButtonLink from '@/src/components/ui/ButtonLink';

interface ProjectPreviewProps {
    thumbnail: string;
    projectName: string;
    description: string;
    technologies: string[];
    githubLink: string;
    viewMoreLink: string;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
    thumbnail,
    projectName,
    description,
    technologies,
    githubLink,
    viewMoreLink
}) => {
    return (
        <div className="group relative flex flex-col sm:flex-row sm:h-37.5 rounded-lg my-2">
            <BackgroundGradient classes='' opacity={.06}/>
            <ProjectPreviewThumbnail thumbnail={thumbnail} projectName={projectName} />
            <ProjectPreviewContent
                projectName={projectName}
                description={description}
                technologies={technologies}
            />
            <ProjectPreviewButtons githubLink={githubLink} viewMoreLink={viewMoreLink} />
        </div>
    );
};

const ProjectPreviewThumbnail: React.FC<{ thumbnail: string; projectName: string }> = ({ thumbnail, projectName }) => {
    return (
        <div className="flex flex-row w-full justify-center bg-background-emphasis rounded-t-lg pt-4 sm:w-37.5 sm:h-37.5 sm:shrink-0 sm:rounded-t-none sm:rounded-l-lg sm:pt-0 sm:block">
            <div className="w-50 h-50 sm:w-full sm:h-full shrink-0 rounded-l-lg overflow-hidden">
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

const ProjectPreviewContent: React.FC<{ projectName: string; description: string; technologies: string[] }> = ({
    projectName,
    description,
    technologies
}) => {
    return (
        <div className="flex-1 flex flex-col justify-between bg-background-emphasis p-2 overflow-hidden sm:rounded-r-lg">
            <div>
                <h4 className="text-lg font-semibold text-foreground-neutral pointer-events-none sm:transition-transform sm:duration-300 sm:group-hover:scale-105">
                    {projectName}
                </h4>
                <Paragraph
                    classes='pointer-events-none text-foreground-neutral sm:transition-transform sm:duration-300 sm:group-hover:scale-105'
                    text={description}
                />
            </div>
            <div className="flex gap-2 mt-2">
                {technologies.map((tech, index) => (
                    <Badge key={index} text={tech} classes="sm:transition-transform sm:duration-300 sm:group-hover:scale-105"/>
                ))}
            </div>
        </div>
    );
};

const ProjectPreviewButtons: React.FC<{ githubLink: string; viewMoreLink: string }> = ({ githubLink, viewMoreLink }) => {
    return (
        <>
            {/* Small screen: static buttons below content */}
            <div className="flex flex-row flex-wrap bg-background-emphasis rounded-b-lg px-2 sm:px-4 pb-2 pt-0 sm:hidden">
                <ButtonLink linkClasses='' buttonClasses='xs:text-lg !text-2xl z-10 mr-2 mb-2' text='Github' link={githubLink}/>
                <ButtonLink linkClasses='' buttonClasses='xs:text-lg !text-2xl z-10 mb-2' text='View More' link={viewMoreLink}/>
            </div>
            {/* Large screen: hover overlay */}
            <div className="hidden sm:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-neutral-300 opacity-25" />
                <ButtonLink linkClasses='' buttonClasses='xs:text-lg !text-2xl z-10 mr-4' text='Github' link={githubLink}/>
                <ButtonLink linkClasses='' buttonClasses='xs:text-lg !text-2xl z-10' text='View More' link={viewMoreLink}/>
            </div>
        </>
    );
};

export default ProjectPreview;

import React from 'react';
import Image from 'next/image';
import Paragraph from '@/src/components/ui/Paragraph';
import Badge from '@/src/components/ui/Badge';
import BackgroundGradient from '@/src/components/ui/BackgroundGradient';
import ButtonLink from '@/src/components/ui/ButtonLink';

const ProjectPreview: React.FC = () => {
    return (
        <div className="group relative flex flex-col sm:flex-row sm:h-37.5 rounded-lg my-2">
            <BackgroundGradient classes='' opacity={.06}/>
            <ProjectPreviewThumbnail/>
            <ProjectPreviewContent/>
            <ProjectPreviewButtons/>
        </div>
    );
};

const ProjectPreviewThumbnail: React.FC = () => {
    return (
        <div className="flex flex-row w-full justify-center bg-background-emphasis rounded-t-lg pt-4 sm:w-37.5 sm:h-37.5 sm:shrink-0 sm:rounded-t-none sm:rounded-l-lg sm:pt-0 sm:block">
            <div className="w-50 h-50 sm:w-full sm:h-full shrink-0 rounded-l-lg overflow-hidden">
                <Image
                    src='/images/project-thumbnails/media-library-manager-thumbnail.png'
                    alt='project preview image'
                    height={200}
                    width={200}
                    className="w-full h-full object-cover sm:rounded-l-lg sm:transition-transform sm:duration-300 sm:group-hover:scale-105"
                    unoptimized
                />
            </div>
        </div>
    );
};

const ProjectPreviewContent: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col justify-between bg-background-emphasis p-4 overflow-hidden sm:rounded-r-lg">
            <div>
                <h4 className="text-lg font-semibold text-foreground-neutral pointer-events-none sm:transition-transform sm:duration-300 sm:group-hover:scale-105">
                    Media Library Manager
                </h4>
                <Paragraph
                    classes='pointer-events-none text-foreground-neutral sm:transition-transform sm:duration-300 sm:group-hover:scale-105'
                    text='A comprehensive tool for organizing and managing your media collection'
                />
            </div>
            <div className="flex gap-2 mt-2">
                <Badge text="Go" classes="sm:transition-transform sm:duration-300 sm:group-hover:scale-105"/>
                <Badge text="React" classes="sm:transition-transform sm:duration-300 sm:group-hover:scale-105"/>
                <Badge text="TypeScript" classes="sm:transition-transform sm:duration-300 sm:group-hover:scale-105"/>
            </div>
        </div>
    );
};

const ProjectPreviewButtons: React.FC = () => {
    return (
        <>
            {/* Small screen: static buttons below content */}
            <div className="flex flex-row flex-wrap bg-background-emphasis rounded-b-lg px-4 pb-2 pt-0 sm:hidden">
                <ButtonLink linkClasses='' buttonClasses='xs:text-lg !text-2xl z-10 mr-2 mb-2' text='Github' link='#'/>
                <ButtonLink linkClasses='' buttonClasses='xs:text-lg !text-2xl z-10 mb-2' text='View More' link='#'/>
            </div>
            {/* Large screen: hover overlay */}
            <div className="hidden sm:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-neutral-300 opacity-25" />
                <ButtonLink linkClasses='' buttonClasses='xs:text-lg !text-2xl z-10 mr-4' text='Github' link='#'/>
                <ButtonLink linkClasses='' buttonClasses='xs:text-lg !text-2xl z-10' text='View More' link='#'/>
            </div>
        </>
    );
};

export default ProjectPreview;

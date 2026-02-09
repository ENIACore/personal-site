import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/src/components/ui/SectionTitle';
import SubSectionTitle from '@/src/components/ui/SubSectionTitle';
import Paragraph from '@/src/components/ui/Paragraph';
import ButtonLink from '@/src/components/ui/ButtonLink';


interface BlogPreviewProps {
    title: string;
    description: string;
    thumbnail: string;
    date?: string;
    tags?: string[];
    readMoreLink?: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({title, description, thumbnail, date, tags, readMoreLink = '#'}) => {
    return (
        <div className='flex flex-col'>
            <SectionTitle classes='' title={title}/>
            <div className="flex flex-col sm:flex-row items-center">
                <div className="w-50 h-50 shrink-0">
                    <Image
                        src={thumbnail}
                        alt={`blog \"${title}\" thumbnail`}
                        height={200}
                        width={200}
                        className="w-full h-full object-cover rounded-2xl"
                        unoptimized
                    />
                </div>
                <div className="flex flex-col">
                    <Paragraph classes='mt-4 sm:m-6 text-center sm:text-start' text={description}/>
                    <ButtonLink text='View Blog' link={readMoreLink} buttonClasses='self-center my-4 xs:text-lg !text-2xl' linkClasses=''/>
                </div>
            </div>
        </div>
    );
};

export default BlogPreview;

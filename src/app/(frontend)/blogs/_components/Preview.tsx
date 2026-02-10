import React from 'react';
import Image from 'next/image';
import ButtonLink from '@/src/components/ui/ButtonLink';
import Text from '@/src/components/ui/Text';


interface PreviewProps {
    title: string;
    description: string;
    thumbnail: string;
    readMoreLink?: string;
}

const Preview: React.FC<PreviewProps> = ({title, description, thumbnail, readMoreLink = '#'}) => {
    return (
        <div className="flex flex-col sm:flex-row items-center">
            <div className="w-50 h-50 shrink-0">
                    <Image
                        src={thumbnail}
                        alt={`blog \"${title}\" thumbnail`}
                        height={200}
                        width={200}
                        className="w-full h-full object-cover rounded-lg"
                        unoptimized
                    />
            </div>
            <div className="flex flex-col p-4">
                <Text className='text-center' text={description} size='bs'/>
                <ButtonLink className='mx-auto mt-4' link={readMoreLink}  text='View Blog' size='lg'/>
            </div>
        </div>
    );
};

export default Preview;

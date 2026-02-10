import React from 'react';
import Text from './Text';

interface BulletListProps {
    items: string[]
    className?: string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const BulletList: React.FC<BulletListProps> = ({items, className = ''}) => {
    return (
        <ul className={`${className} list-disc list-inside`}>
            {items.map((text, index) => (
                <li key={index}>
                    <Text className='inline!' text={text} size='bs'/>
                </li>
            ))}
        </ul>
    );
};

export default BulletList;

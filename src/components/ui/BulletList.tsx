import React from 'react';

interface BulletListProps {
    items: string[]
    className?: string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const BulletList: React.FC<BulletListProps> = ({items, className = ''}) => {
    return (
        <ul className={`${className} text-base font-normal text-foreground list-retro list-inside xs:text-sm`}>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default BulletList;

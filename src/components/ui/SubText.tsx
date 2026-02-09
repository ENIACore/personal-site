import React from 'react';

interface SubTextProps {
    text: string
    className?: string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const SubText: React.FC<SubTextProps> = ({text, className}) => {
    return (
        <span className={`${className} text-xs font-light text-foreground-muted`}>
        {text}
        </span>
    );
};
export default SubText;

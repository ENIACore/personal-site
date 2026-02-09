import React from 'react';

interface SubSectionTitleProps {
    title: string
    className?: string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const SubSectionTitle: React.FC<SubSectionTitleProps> = ({title, className}) => {
    return (
        <h3 className={`${className} text-xl font-semibold text-foreground`}>
            {title}
        </h3>
    );
};

export default SubSectionTitle;

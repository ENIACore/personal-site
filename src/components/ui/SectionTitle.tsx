import React from 'react';

interface SectionTitleProps {
    title: string
    className?: string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const SectionTitle: React.FC<SectionTitleProps> = ({title, className}) => {
    return (
        <h2 className={`my-4 text-2xl font-bold text-foreground-secondary ${className}`}>
            {title}
        </h2>
    );
};

export default SectionTitle;

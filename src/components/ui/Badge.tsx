import React from 'react';

interface BadgeProps {
    text:   string
    className?: string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const Badge: React.FC<BadgeProps> = ({text, className}) => {
    return (
        <>
        {/* Positions tooltip in direct center, then moves down to bottom of group + 4px on hover */}
        <span className={`${className} inline-block self-start p-1 text-sm font-semibold text-foreground-secondary bg-background-secondary rounded pointer-events-none`}>
            {text}
        </span>
        </>
    );
};

export default Badge;

import React from 'react';

interface TooltipProps {
    text:   string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const Tooltip: React.FC<TooltipProps> = ({text}) => {
    return (
        <>
        {/* Positions tooltip in direct center, then moves down to bottom of group + 4px on hover */}
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-2 py-1 text-xs font-semibold text-foreground-secondary bg-background-secondary rounded opacity-0 transition-all duration-300 whitespace-nowrap pointer-events-none group-hover:opacity-100 group-hover:mt-1 group-hover:translate-y-[calc(50%)]">
            {text}
        </span>
        </>
    );
};

export default Tooltip;

import React from 'react';

interface TooltipProps {
    text:   string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Tooltip: React.FC<TooltipProps> = ({text}) => {
    return (
        <>
        {/* Positions tooltip in direct center, then moves down to bottom of group + 4px on hover */}
        <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-2 py-1 bg-secondary-300 font-semibold text-xs text-secondary-900 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none group-hover:translate-y-[calc(50%)] group-hover:mt-1">
            {text}
        </span>
        </>
    );
};

export default Tooltip;

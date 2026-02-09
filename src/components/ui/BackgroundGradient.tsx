import React from 'react';

interface BackgroundGradientProps {
    opacity: number
    className?: string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const BackgroundGradient: React.FC<BackgroundGradientProps> = ({opacity, className}) => {
    return (
        <div
            className={`${className} absolute inset-0 pointer-events-none`}
            style={{
                opacity: opacity,
                backgroundImage: "url('/images/backgrounds/bg-gradient.png')",
                backgroundSize: '161px',
                backgroundRepeat: 'repeat'
            }}
        >
        </div>
    );
};

export default BackgroundGradient;

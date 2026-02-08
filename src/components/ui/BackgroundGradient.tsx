import React from 'react';

interface BackgroundGradientProps {
    opacity: number
    classes: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const BackgroundGradient: React.FC<BackgroundGradientProps> = ({opacity, classes}) => {
    return (
        <div
            className={`${classes} absolute inset-0 pointer-events-none`}
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

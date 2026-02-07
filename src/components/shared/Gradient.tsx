import React from 'react';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Gradient: React.FC = () => {
    return (
        <div
            className="fixed inset-0 opacity-[0.03] pointer-events-none"
            style={{
                backgroundImage: "url('bg-gradient.png')",
                backgroundSize: '161px',
                backgroundRepeat: 'repeat'
            }}
        >
        </div>
    );
};

export default Gradient;

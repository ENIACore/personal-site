import React from 'react';

interface ParagraphProps {
    text: string
    className?: string
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const Paragraph: React.FC<ParagraphProps> = ({text, className}) => {
    return (
        <p className={`${className} text-base font-normal text-foreground xs:text-sm`}>
        {text}
        </p>
    );
};
export default Paragraph;

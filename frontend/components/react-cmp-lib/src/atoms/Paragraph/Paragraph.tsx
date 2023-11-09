import React from 'react';
import { fontSize } from '@prj--react-playground-typescript/foundation-ts';

export interface ParagraphProps {
    size?: keyof typeof fontSize;
    children: React.ReactNode;
}
const Paragraph: React.FC<ParagraphProps> = ({ size = fontSize.base, children }) => {
    const className = `paragraph paragraph--${size}`;
    return (
        <p data-testid="Paragraph" className={className}>
            {children}
        </p>
    );
};

export default Paragraph;

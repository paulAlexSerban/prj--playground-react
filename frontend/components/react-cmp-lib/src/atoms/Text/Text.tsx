import React from 'react';
import { fontSize } from '@prj--react-playground-typescript/foundation-ts';

export interface TextProps {
    size?: keyof typeof fontSize;
    children: React.ReactNode;
}
const Text: React.FC<TextProps> = ({ size = fontSize.base, children }) => {
    const className = `text text-${size}`;
    return (
        <p data-testid="Text" className={className}>
            {children}
        </p>
    );
};

export default Text;

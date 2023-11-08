import React from 'react';
import { FontSize } from '@prj--react-playground-typescript/foundation';

export interface TextProps {
    size?: keyof typeof FontSize;
    children: React.ReactNode;
}
const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
    const className = `text text-${size}`;
    return (
        <p data-testid="Text" className={className}>
            {children}
        </p>
    );
};

export default Text;

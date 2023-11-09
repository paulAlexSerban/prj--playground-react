import React from 'react';
import { Spacing } from '@prj--react-playground-typescript/foundation-ts';

export interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children?: React.ReactNode;
}

const Margin: React.FC<MarginProps> = ({ space = 'xxxs', children, left, right, top, bottom }) => {
    let className = ``;

    if (!left && !right && !top && !bottom) {
        className = `margin-${space}`;
    }

    if (left) {
        className = `${className} margin-left-${space}`;
    }

    if (right) {
        className = `${className} margin-right-${space}`;
    }

    if (top) {
        className = `${className} margin-top-${space}`;
    }

    if (bottom) {
        className = `${className} margin-bottom-${space}`;
    }

    return (
        <div data-testid="Margin" className={className}>
            {children}
        </div>
    );
};

export default Margin;

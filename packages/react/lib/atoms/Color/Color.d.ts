import React from 'react';
import { Spacing } from '@prj--playground-react/foundation';
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: ({ hexCode, width, height }: ColorProps) => React.JSX.Element;
export default Color;

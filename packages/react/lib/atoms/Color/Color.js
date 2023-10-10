import React from 'react';
import { Spacing } from '@prj--playground-react/foundation';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    const className = `width-${width} height-${height}`;
    return (React.createElement("div", { className: className, style: {
            backgroundColor: hexCode,
        } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map

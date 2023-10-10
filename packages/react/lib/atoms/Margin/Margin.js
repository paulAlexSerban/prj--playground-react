import React from 'react';

const Margin = ({ space = 'xxxs', children, left, right, top, bottom }) => {
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
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map

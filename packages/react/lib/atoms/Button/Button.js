import React from 'react';

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (React.createElement("button", { type: "button", className: ['button', `button--${size}`, mode].join(' '), style: { backgroundColor }, ...props }, label));
};

export { Button as default };
//# sourceMappingURL=Button.js.map

import { log } from '../../log.js';
import type { FC, ReactNode } from 'react';

// Update the IconButtonProps to accept a React component for the icon.
type IconButtonProps = {
    children: ReactNode;
    icon: FC<any>; // Accept any functional component
    onClick: () => void;
};

const IconButton: FC<IconButtonProps> = ({ children, icon: Icon, ...props }) => {
    log('<IconButton /> rendered', 2);

    // Directly use the Icon component passed via props
    return (
        <button {...props} className="button">
            <Icon className="button-icon" />
            <span className="button-text">{children}</span>
        </button>
    );
};

export default IconButton;

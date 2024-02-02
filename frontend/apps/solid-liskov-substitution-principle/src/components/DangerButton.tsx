import { ButtonHTMLAttributes, ReactNode } from 'react';
interface IDangerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    // Your extra props if you have
}

const DangerButton = ({ children, ...props }: IDangerButtonProps) => {
    return (
        <button {...props} className="danger">
            {children}
        </button>
    );
};

export default DangerButton;

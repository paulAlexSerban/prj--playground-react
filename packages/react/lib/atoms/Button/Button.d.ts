import React from 'react';
interface ButtonProps {
    children: React.ReactNode;
    label: string;
}
declare const Button: ({ label }: ButtonProps) => React.JSX.Element;
export default Button;

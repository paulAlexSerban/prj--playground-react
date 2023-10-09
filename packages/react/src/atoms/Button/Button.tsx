import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    label: string;
}

const Button = ({ label }: ButtonProps) => <button>{label}</button>;

export default Button;

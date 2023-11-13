import { FC, ComponentPropsWithoutRef } from 'react';

export type InputProps = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
} & ComponentPropsWithoutRef<'input'>;

const Input: FC<InputProps> = ({ id, label, ...props }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </div>
    );
};

export default Input;

import React from 'react';
export declare const KEY_CODES: {
    ENTER: number;
    SPACE: number;
    DOWN_ARROW: number;
    ESC: number;
    UP_ARROW: number;
};
export interface SelectOption {
    label: string;
    value: string;
}
export interface RenderOptionProps {
    isSelected: boolean;
    option: SelectOption;
    getOptionRecommendedProps: (overrideProps?: Object) => Object;
}
export interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    options?: SelectOption[];
    label?: string;
    renderOption?: (props: RenderOptionProps) => React.ReactNode;
}
declare const Select: React.FC<SelectProps>;
export default Select;

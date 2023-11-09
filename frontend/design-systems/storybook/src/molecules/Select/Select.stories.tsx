import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@prj--react-playground-typescript/react-cmp-lib';
import React from 'react';

import '@prj--react-playground-typescript/styles-generic/lib/components/molecules/select.css';
import '@prj--react-playground-typescript/styles-generic/lib/system/pages/main.css';

const meta: Meta<typeof Select> = {
    title: 'Molecules/Select',
    component: Select,

    parameters: {
        options: [],
        label: 'Placeholder text here',
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
    {
        label: 'Strict Black',
        value: 'black',
    },
    {
        label: 'Heavenly Green',
        value: 'green',
    },
    {
        label: 'Sweet Pink',
        value: 'pink',
    },
];

export const Default: Story = {
    args: {
        options,
        label: 'Select your favourite color',
    },
};

export const RenderOption: Story = {
    args: {
        options,
        label: 'Select your favourite color',
    },
    render: () => (
        <Select
            options={options}
            renderOption={({ getOptionRecommendedProps, option, isSelected }) => (
                <span {...getOptionRecommendedProps()}>
                    {option.label} {isSelected ? 'SELECTED !' : ''}
                </span>
            )}
        />
    ),
};

export const CustomLabel: Story = {
    args: {
        options,
        label: 'Select your favourite color',
    },
};

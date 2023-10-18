import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import React from 'react';

import '@prj--playground-react/lsg/lib/molecules/select.css';
import '@prj--playground-react/lsg/lib/global.css';

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

/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import '@prj--playground-react/scss/lib/atoms/utilities.css';
declare const meta: {
    title: string;
    component: import("react").FC<import("./Color").ColorProps>;
    parameters: {
        hexCode: string;
        width: string;
        height: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithKnobs: Story;

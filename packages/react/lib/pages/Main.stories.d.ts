/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import '@prj--playground-react/scss/lib/organisms/header.css';
import '@prj--playground-react/scss/lib/pages/main.css';
declare const meta: {
    title: string;
    component: import("react").FC<{}>;
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedOut: Story;
export declare const LoggedIn: Story;

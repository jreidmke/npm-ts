import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Switch from "../components/Switch/Switch";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Switch",
    component: Switch,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        isGradient: { control: Boolean },
    },
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    isGradient: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    isGradient: false,
};

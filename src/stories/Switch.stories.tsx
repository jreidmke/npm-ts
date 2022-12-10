import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import cx from "classnames";

import Switch from "../components/Switch";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Switch",
    component: Switch,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    switchClassName: cx(
        "radix-state-checked:bg-sky-100 dark:radix-state-checked:bg-green-300",
        "radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-white",
        "relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    ),
    thumbClassName: cx(
        "radix-state-checked:bg-green-600",
        "group-radix-state-checked:translate-x-5",
        "group-radix-state-unchecked:translate-x-0",
        "pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white dark:bg-black shadow-lg ring-0 transition duration-200 ease-in-out"
    ),
};

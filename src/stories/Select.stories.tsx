import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import cx from "classnames";

import Select from "../components/Select";
import { Items } from "../components/Select";

const items = [
    {
        title: "One",
        value: "one",
        disabled: false,
    },
    {
        title: "Two",
        value: "two",
        disabled: false,
    },
    {
        title: "Three",
        value: "three",
        disabled: true,
    },
    {
        title: "Four",
        value: "four",
        disabled: false,
    },
];

export default {
    title: "Example/Select",
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    items: items,
    triggerClassName: cx(
        "inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
        "bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900",
        "hover:bg-gray-50",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
        "group",
        "radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
        "radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
        "radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50"
    ),
    scrollBtnClassName: "bg-black",
    viewportClassName: "rounded-md bg-white dark:bg-gray-500",
    itemClassName: cx(
        "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900",
        "radix-disabled:opacity-50",
        "focus:outline-none select-none"
    ),
};

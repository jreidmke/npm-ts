import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import cx from "classnames";

import RadioGroup from "../components/RadioGroup";
import { RadioItem } from "../components/RadioGroup";

const starters: RadioItem[] = [
    { id: "1", title: "Bulbasaur" },
    { id: "2", title: "Charmader" },
    { id: "3", title: "Squirtle" },
];

export default {
    title: "Example/RadioGroup",
    component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
    <RadioGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    items: starters,
    ariaLabel: "Pokemon starter radio group",
    labelClassName: "font-mono dark:text-white",
    labelContent: "Choose your starter",
    buttonClassName: cx(
        "peer relative w-4 h-4 rounded-full",
        // Setting the background in dark properly requires a workaround (see css/tailwind.css at https://github.com/ecklf/tailwindcss-radix/blob/main/demo/css/tailwind.css or at index.css in this repo)
        "border border-transparent text-white",
        "radix-state-checked:bg-purple-600 dark:radix-state-checked:bg-green-300",
        "radix-state-unchecked:bg-gray-100 dark:radix-state-unchecked:bg-green-900",
        "focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
    ),
    itemClassName: cx(
        "ml-2 block text-sm font-medium text-gray-700 dark:text-gray-400"
    ),
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
    FontBoldIcon,
    FontItalicIcon,
    UnderlineIcon,
} from "@radix-ui/react-icons";
import ToggleGroup from "../components/ToggleGroup";
import { ToggleItem } from "../components/ToggleGroup";

const items: ToggleItem[] = [
    {
        value: "bold",
        label: "Font bold",
        icon: <FontBoldIcon />,
        itemAriaLabel: "Font bold",
    },
    {
        value: "italic",
        label: "Font italic",
        icon: <FontItalicIcon />,
        itemAriaLabel: "Font italic",
    },
    {
        value: "underline",
        label: "Underline",
        icon: <UnderlineIcon />,
        itemAriaLabel: "Underline",
    },
];

const items2: ToggleItem[] = [
    {
        value: "bold",
        label: "Font bold",
        icon: <FontBoldIcon color="red" />,
        itemAriaLabel: "Font bold",
    },
    {
        value: "italic",
        label: "Font italic",
        icon: <FontItalicIcon color="blue" />,
        itemAriaLabel: "Font italic",
    },
    {
        value: "underline",
        label: "Underline",
        icon: <UnderlineIcon color="white" />,
        itemAriaLabel: "Underline",
    },
];

export default {
    title: "Example/ToggleGroup",
    component: ToggleGroup,
} as ComponentMeta<typeof ToggleGroup>;

const Template: ComponentStory<typeof ToggleGroup> = (args) => (
    <ToggleGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    items: items,
    groupAriaLabel: "Font type",
    itemProps:
        "border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x bg-gray-800 radix-state-on:bg-gray-200",
};

export const Secondary = Template.bind({});
Secondary.args = {
    items: items2,
    groupAriaLabel: "Font type",
    itemProps:
        "border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x bg-red-800 radix-state-on:bg-blue-200",
};

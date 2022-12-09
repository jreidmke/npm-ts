import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PlusIcon } from "@radix-ui/react-icons";

import Tooltip from "../components/Tooltip";

export default {
    title: "Example/Tooltip",
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
    <Tooltip {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    trigger: (
        <button className="mx-32 p-4 rounded-full bg-blue-100">
            <PlusIcon />
        </button>
    ),
    tooltipContent: "Pass in trigger and tooltip content",
    contentClasses: "bg-pink-200 py-4 px-8 rounded-full",
    arrowClasses: "fill-pink-200",
};

export const Secondary = Template.bind({});
Secondary.args = {
    trigger: <p>This p tag can also be a trigger</p>,
    tooltipContent: "Pass in trigger and tooltip content",
    contentClasses: "bg-sky-500 p-8",
    arrowClasses: "fill-sky-500",
};

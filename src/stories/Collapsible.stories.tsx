import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PlayIcon, Share2Icon, TriangleRightIcon } from "@radix-ui/react-icons";
import cx from "classnames";

import Collapsible from "../components/Collapsible";

export default {
    title: "Example/Collapsible",
    component: Collapsible,
} as ComponentMeta<typeof Collapsible>;

const Template: ComponentStory<typeof Collapsible> = (args) => (
    <Collapsible {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    triggerClassName: cx(
        "group flex w-32 select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium",
        "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    ),
    triggerContent: (
        <div className="flex">
            Click here
            <TriangleRightIcon className="transform duration-300 ease-in-out group-radix-state-open:rotate-90 mt-.5" />
        </div>
    ),
    content: ["ABC", "123", "089"].map((title, i) => (
        <div
            key={`collapsible-${title}-${i}`}
            className={cx(
                "group",
                "w-64 ml-12 flex select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium",
                "bg-gray-100 text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900"
            )}
        >
            {title}
            <div className="hidden items-center space-x-3 group-hover:flex">
                <Share2Icon className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
                <PlayIcon className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
            </div>
        </div>
    )),
};

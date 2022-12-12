import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import cx from "classnames";
import { FaceIcon } from "@radix-ui/react-icons";

import HoverCard from "../components/HoverCard";

export default {
    title: "Example/HoverCard",
    component: HoverCard,
} as ComponentMeta<typeof HoverCard>;

const Template: ComponentStory<typeof HoverCard> = (args) => (
    <HoverCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    trigger: (
        <div
            className={cx(
                "inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-300 p-2.5 dark:bg-gray-900"
            )}
        >
            <FaceIcon />
        </div>
    ),
    contentClassName: cx(
        "max-w-md rounded-lg p-4 md:w-full",
        "bg-green-300 dark:bg-gray-800"
    ),
    content: (
        <div className="flex h-full w-full space-x-4">
            <div
                className={cx(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-inner bg-gray-50/60 p-2.5 dark:bg-gray-900"
                )}
            ></div>

            <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    You can insert any kind of content into this card
                </h3>

                <input
                    className="shadow appearance-none bg-white border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Including inputs"
                />
            </div>
        </div>
    ),
    arrowColor: "fill-green-300",
};

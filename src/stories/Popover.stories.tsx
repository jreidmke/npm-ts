import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SunIcon } from "@radix-ui/react-icons";
import cx from "classnames";

import Popover from "../components/Popover";

export default {
    title: "Example/Popover",
    component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

const items = [
    {
        id: "width",
        label: "Width",
        defaultValue: "100%",
    },
    {
        id: "max-width",
        label: "Max. width",
        defaultValue: "300px",
    },
    {
        id: "height",
        label: "Height",
        defaultValue: "25px",
    },
    {
        id: "max-height",
        label: "Max. height",
        defaultValue: "none",
    },
];

export const Primary = Template.bind({});
Primary.args = {
    trigger: (
        <button className="ml-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Click
        </button>
    ),
    contentAlignment: "start",
    arrowClassName: "fill-current text-white dark:text-gray-800",
    contentClassName: cx(
        "w-48 rounded-lg p-4 shadow-md md:w-56",
        "bg-white dark:bg-gray-800"
    ),
    content: (
        <>
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Dimensions
            </h3>

            <form className="mt-4 space-y-2">
                {items.map(({ id, label, defaultValue }) => {
                    return (
                        <fieldset
                            key={`popover-items-${id}`}
                            className="flex items-center"
                        >
                            <label
                                htmlFor={id}
                                className="shrink-0 grow text-xs font-medium text-gray-700 dark:text-gray-400"
                            >
                                {label}
                            </label>
                            <input
                                id={id}
                                type="text"
                                defaultValue={defaultValue}
                                autoComplete="given-name"
                                className={cx(
                                    "block w-1/2 rounded-md",
                                    "text-xs text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600",
                                    "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
                                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                )}
                            />
                        </fieldset>
                    );
                })}
            </form>
        </>
    ),
    closeButtonClassName: cx(
        "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    ),
};

export const Secondary = Template.bind({});
Secondary.args = {
    trigger: (
        <h1 className="font-serif text-bold dark:text-white">
            This h1 tag is also a trigger
        </h1>
    ),
    arrowClassName: "fill-current text-white dark:text-gray-800",
    contentClassName: cx(
        "w-48 rounded-lg p-4 shadow-md md:w-56",
        "bg-sky-400 dark:bg-purple-800"
    ),
    content: (
        <div className="flex justify-center flex-col text-white">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
                You can put
            </button>
            <p>any kind of content</p>
            <SunIcon />
            <h4>in here</h4>
        </div>
    ),
    closeButtonClassName: cx(
        "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    ),
    closeButtonColor: "text-green-500",
};

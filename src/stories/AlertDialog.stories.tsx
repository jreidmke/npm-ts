import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import cx from "classnames";

import AlertDialog from "../components/AlertDiaglog/AlertDialog";

export default {
    title: "Example/AlertDialog",
    component: AlertDialog,
} as ComponentMeta<typeof AlertDialog>;

const Template: ComponentStory<typeof AlertDialog> = (args) => (
    <AlertDialog {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    trigger: <button>Custom trigger</button>,
    contentClassName: cx(
        "fixed z-50",
        "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
        "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
        "bg-white dark:bg-gray-800",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    ),
    content: (
        <div>
            <p>Dialog content (p tag)&nbsp;</p>
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                can accept (button)
            </button>
            <br />
            <br />
            <br />
            <br />
            <input
                className="block shadow-md text-gray-700 text-sm font-bold mb-2 w-full"
                placeholder=" any type of content (input)"
            />
        </div>
    ),
    optionsClassName: "flex justify-end h-12 space-x-4",
    options: [
        <AlertDialogPrimitive.Cancel asChild>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Yes
            </button>
        </AlertDialogPrimitive.Cancel>,
        <AlertDialogPrimitive.Cancel asChild>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                No
            </button>
        </AlertDialogPrimitive.Cancel>,
    ],
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import Dialog from "../components/Dialog";

export default {
    title: "Example/Dialog",
    component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <button className="Button violet">Custom trigger</button>,
    dialogTitle: "Dialog Title",
    dialogDescription: "Dialog description",
    dialogContent: (
        <div>
            <p>Dialog content (p tag)&nbsp;</p>
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                can accept (button)
            </button>
            <br />
            <input
                className="block shadow-md text-gray-700 text-sm font-bold mb-2 w-full"
                placeholder=" any type of content (input)"
            />
        </div>
    ),
    showCancel: true,
    options: [
        <DialogPrimitive.Close asChild>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Yes
            </button>
        </DialogPrimitive.Close>,
        <DialogPrimitive.Close asChild>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                No
            </button>
        </DialogPrimitive.Close>,
    ],
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

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
    trigger: <button className="Button violet">Dialog Trigger</button>,
    title: "This is the Dialog title",
    description:
        "The below options are passed in as an array of buttons, except the cancel button which is handled by boolean 'showCancel'",
    options: [<button className="Button green">Option</button>],
};

export const Secondary = Template.bind({});
Secondary.args = {
    trigger: <p className="cursor-pointer">This p tag can also be a trigger</p>,
    title: "Dialog title",
    description: "Here is a description",
    options: [
        <button className="Button green">Yes</button>,
        <button className="Button red">No</button>,
    ],
    showCancel: false,
};

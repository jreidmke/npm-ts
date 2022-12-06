import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dialog from "../components/Dialog/Dialog";

export default {
    title: "Example/Dialog",
    component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog />;

export const Primary = Template.bind({});
Primary.args = {};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlertDialog from "../components/AlertDiaglog/AlertDialog";

export default {
    title: "Example/AlertDialog",
    component: AlertDialog,
} as ComponentMeta<typeof AlertDialog>;

const Template: ComponentStory<typeof AlertDialog> = (args) => <AlertDialog />;

export const Primary = Template.bind({});
Primary.args = {};

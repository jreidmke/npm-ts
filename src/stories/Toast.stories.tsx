import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toast from "../components/Toast";

export default {
    title: "Example/Toast",
    component: Toast,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = () => <Toast />;

export const Primary = Template.bind({});

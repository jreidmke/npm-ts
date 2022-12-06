import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Progress from "../components/Progress/Progress";

export default {
    title: "Example/Progress",
    component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => <Progress />;

export const Primary = Template.bind({});
Primary.args = {};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "../components/Tooltip/Tooltip";

export default {
    title: "Example/Tooltip",
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip />;

export const Primary = Template.bind({});
Primary.args = {};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Popover from "../components/Popover/Popover";

export default {
    title: "Example/Popover",
    component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover />;

export const Primary = Template.bind({});
Primary.args = {};

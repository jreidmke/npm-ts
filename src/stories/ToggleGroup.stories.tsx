import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ToggleGroup from "../components/ToggleGroup/ToggleGroup";

export default {
    title: "Example/ToggleGroup",
    component: ToggleGroup,
} as ComponentMeta<typeof ToggleGroup>;

const Template: ComponentStory<typeof ToggleGroup> = (args) => <ToggleGroup />;

export const Primary = Template.bind({});
Primary.args = {};

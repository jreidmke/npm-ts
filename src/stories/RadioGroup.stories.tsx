import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioGroup from "../components/RadioGroup/RadioGroup";

export default {
    title: "Example/RadioGroup",
    component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup />;

export const Primary = Template.bind({});
Primary.args = {};

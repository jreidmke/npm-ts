import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "../components/Checkbox/Checkbox";

export default {
    title: "Example/Checkbox",
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox />;

export const Primary = Template.bind({});
Primary.args = {};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toggle from "../components/Toggle/Toggle";

export default {
    title: "Example/Toggle",
    component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle />;

export const Primary = Template.bind({});
Primary.args = {};

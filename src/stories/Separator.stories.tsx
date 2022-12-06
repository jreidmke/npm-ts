import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Separator from "../components/Separator/Separator";

export default {
    title: "Example/Separator",
    component: Separator,
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => <Separator />;

export const Primary = Template.bind({});
Primary.args = {};

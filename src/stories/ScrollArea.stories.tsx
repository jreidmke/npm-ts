import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ScrollArea from "../components/ScrollArea/ScrollArea";

export default {
    title: "Example/ScrollArea",
    component: ScrollArea,
} as ComponentMeta<typeof ScrollArea>;

const Template: ComponentStory<typeof ScrollArea> = (args) => <ScrollArea />;

export const Primary = Template.bind({});
Primary.args = {};

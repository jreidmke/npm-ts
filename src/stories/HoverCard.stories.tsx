import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HoverCard from "../components/HoverCard/HoverCard";

export default {
    title: "Example/HoverCard",
    component: HoverCard,
} as ComponentMeta<typeof HoverCard>;

const Template: ComponentStory<typeof HoverCard> = (args) => <HoverCard />;

export const Primary = Template.bind({});
Primary.args = {};

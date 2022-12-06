import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "../components/Avatar/Avatar";

export default {
    title: "Example/Avatar",
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar />;

export const Primary = Template.bind({});
Primary.args = {};

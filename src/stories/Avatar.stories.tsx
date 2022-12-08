import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "../components/Avatar/Avatar";

export default {
    title: "Example/Avatar",
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    imageSrc:
        "https://images.unplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    // altText: "Avatar",
    // className: "",
    // fallbackText: "JR",
    // fallbackDelay: 1000,
};

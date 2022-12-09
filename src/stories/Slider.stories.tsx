import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Slider from "../components/Slider/Slider";

export default {
    title: "Example/Slider",
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    defaultValue: [50],
    max: 100,
    step: 1,
};

export const Secondary = Template.bind({});
Secondary.args = {
    defaultValue: [25],
    max: 200,
    step: 5,
    uxWidth: "w-128",
    trackColor: "bg-red-500",
    thumbColor: "bg-blue-900",
    additionalThumbProps:
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Slider from "../components/Slider/Slider";

export default {
    title: "Example/Slider",
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider />;

export const Primary = Template.bind({});
Primary.args = {};

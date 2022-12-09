import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toggle from "../components/Toggle";

export default {
    title: "Example/Toggle",
    component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <button className="italic">t</button>,
    genericClasses: "rounded h-16 w-16 m-2 shadow-md",
    inactiveClasses: "bg-pink-50 hover:bg-pink-200",
    activeClasses: "border border-black bg-pink-500",
};

export const Secondary = Template.bind({});
Secondary.args = {
    trigger: <h1>Check here</h1>,
    genericClasses: "rounded h-16 w-32 m-8 shadow-lg text-center",
    inactiveClasses: "border border-6 border-black hover:bg-red-50",
    activeClasses: "border border-6 border-red-500 bg-white",
};

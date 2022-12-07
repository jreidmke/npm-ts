import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toggle from "../components/Toggle/Toggle";

export default {
    title: "Example/Toggle",
    component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <button className="italic">t</button>,
    genericClasses: "rounded h-16 w-16 m-2 shadow-md",
    inactiveClasses: "hover:bg-pink-100",
    activeClasses: "border border-black bg-pink-100",
};

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
    activeContent: (
        <div className="flex justify-center align-items-middle w-20 h-20 bg-red-300">
            Active
        </div>
    ),
    inactiveContent: (
        <div className="flex justify-center align-items-middle w-20 h-20 bg-gray-500">
            Inactive
        </div>
    ),
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "../components/Checkbox";
import cx from "classnames";

export default {
    title: "Example/Checkbox",
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    checkBoxClassName: cx(
        "radix-state-checked:bg-blue-600 radix-state-unchecked:bg-gray-300"
    ),
    interiorClassName: cx("text-white"),
};

export const Secondary = Template.bind({});
Secondary.args = {
    checkBoxClassName: cx(
        "radix-state-checked:bg-purple-600 radix-state-unchecked:bg-red-300"
    ),
    interiorClassName: cx("text-lime-500"),
};

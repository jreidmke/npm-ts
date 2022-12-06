import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "../components/Select/Select";

export default {
    title: "Example/Select",
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select />;

export const Primary = Template.bind({});
Primary.args = {};

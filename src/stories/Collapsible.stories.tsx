import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Collapsible from "../components/Collapsible/Collapsible";

export default {
    title: "Example/Collapsible",
    component: Collapsible,
} as ComponentMeta<typeof Collapsible>;

const Template: ComponentStory<typeof Collapsible> = (args) => <Collapsible />;

export const Primary = Template.bind({});
Primary.args = {};

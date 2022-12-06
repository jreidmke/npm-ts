import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tabs from "../components/Tabs/Tabs";

export default {
    title: "Example/Tabs",
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs />;

export const Primary = Template.bind({});
Primary.args = {};

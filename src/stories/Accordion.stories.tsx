import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "../components/Accordion/Accordion";

export default {
    title: "Example/Accordion",
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion />;

export const Primary = Template.bind({});
Primary.args = {};

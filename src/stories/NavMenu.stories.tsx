import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavMenu from "../components/NavMenu/NavMenu";

export default {
    title: "Example/NavMenu",
    component: NavMenu,
} as ComponentMeta<typeof NavMenu>;

const Template: ComponentStory<typeof NavMenu> = (args) => <NavMenu />;

export const Primary = Template.bind({});
Primary.args = {};

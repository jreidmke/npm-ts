import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Progress from "../components/Progress";

export default {
    title: "Example/Progress",
    component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
    <Progress {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    initProgress: 60,
    progressRootClassName:
        "h-3 w-full overflow-hidden rounded-full bg-white dark:bg-gray-900",
    progressIndicatorClassName:
        "h-full bg-purple-500 duration-300 ease-in-out dark:bg-white",
};

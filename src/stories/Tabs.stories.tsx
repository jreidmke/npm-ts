import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tabs from "../components/Tabs";
import { Tab } from "../components/Tabs";
import cx from "classnames";

const tabs: Tab[] = [
    {
        title: "Inbox",
        value: "tab1",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        title: "Today",
        value: "tab2",
        content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
        title: "Upcoming",
        value: "tab3",
        content:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
];

const tabs2: Tab[] = [
    {
        title: "Input",
        value: "input",
        content: (
            <div className="inline-block relative w-64">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow  text-black leading-tight focus:outline-none focus:shadow-outline">
                    <option>You can put inputs in here</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        ),
    },
    {
        title: "Button",
        value: "button",
        content: (
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                ...and buttons w/ SVGs in them!
            </button>
        ),
    },
    {
        title: "Pizza",
        value: "pizza",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        title: "Candy",
        value: "candy",
        content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
        title: "Burger",
        value: "burger",
        content:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
];

export default {
    title: "Example/Tabs",
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    items: tabs,
    tabsTriggerClassName: cx(
        "first:rounded-tl-lg last:rounded-tr-lg",
        "border-b first:border-r last:border-l",
        "border-gray-300 dark:border-gray-600",
        "radix-state-inactive:bg-sky-50 radix-state-active:bg-sky-200",
        "dark:radix-state-inactive:bg-red-100 dark:radix-state-active:bg-red-200",
        "flex-1 px-3 py-2.5",
        "text-sm font-medium",
        "text-black"
    ),
    tabsContentClassName: cx(
        "rounded-b-lg bg-white px-6 py-4",
        "bg-sky-200 dark:bg-red-200",
        "text-sm text-gray-700 text-black"
    ),
};

export const Secondary = Template.bind({});
Secondary.args = {
    items: tabs2,
    tabsTriggerClassName: cx(
        "first:rounded-tl-lg last:rounded-tr-lg",
        "radix-state-active:bg-gray-400 radix-state-inactive:bg-gray-200",
        "dark:radix-state-active:bg-white radix-state-inactive:bg-gray-200",
        "flex-1 px-3 py-2.5",
        "text-sm font-medium italic"
    ),
    tabsContentClassName: cx(
        "rounded-b-lg bg-white px-6 py-4 bg-gray-400 dark:bg-white",
        "text-sm text-gray-700 dark:text-black"
    ),
    defaultValue: "input",
};

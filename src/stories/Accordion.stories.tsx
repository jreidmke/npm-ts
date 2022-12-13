import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "../components/Accordion/Accordion";

import { Item } from "../components/Accordion/Accordion";

export default {
    title: "Example/Accordion",
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
    <Accordion {...args} />
);

const items: Item[] = [
    {
        triggerContent: "Trigger One",
        bodyContent: (
            <div className="p-4">
                <h1>You can place anything in the accordion content</h1>
            </div>
        ),
        value: "item-1",
    },
    {
        triggerContent: "Trigger Two",
        bodyContent: (
            <div className="p-4">
                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="password"
                    placeholder="You can place forms"
                />
            </div>
        ),
        value: "item-2",
    },
    {
        triggerContent: "Trigger Three",
        bodyContent: (
            <div className="p-4">
                <img
                    src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60"
                    alt="pizza"
                />
                <p>Or an image</p>
            </div>
        ),
        value: "item-3",
    },
];

export const Primary = Template.bind({});
Primary.args = {
    accordionType: "multiple",
    items: items,
    defaultValue: "item-3",
    rootClassName: "w-64",
    itemClassName:
        "first:border first:rounded-t-lg first:border-gray-100 last:border last:rounded-b-lg last:border-gray-100 focus-within:shadow-lg",
    triggerClassName:
        "flex justify-between items-center w-64 h-16 px-4 shadow-lg bg-white hover:bg-gray-100",
};

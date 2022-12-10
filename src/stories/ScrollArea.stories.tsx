import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ScrollArea from "../components/ScrollArea/ScrollArea";

export default {
    title: "Example/ScrollArea",
    component: ScrollArea,
} as ComponentMeta<typeof ScrollArea>;

const Template: ComponentStory<typeof ScrollArea> = (args) => (
    <ScrollArea {...args} />
);

const items = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const Primary = Template.bind({});
Primary.args = {
    items: items,
    scrollAreaSize: "w-64 h-128",
    titleClassName: "font-mono mb-4 text-pink-500 italic",
    titleContent: "This area can scroll",
    itemClass: "border-gray-200 border-t py-4",
};

const items2 = [
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
    </div>,
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        ...and buttons w/ SVGs in them!
    </button>,
    <img
        src="https://www.milwaukeemag.com/wp-content/uploads/2021/04/0421-FEAT-BestPizza1-Baran.jpg"
        alt="Pizza"
    />,
    <h1>And images!</h1>,
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
    </div>,
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        ...and buttons w/ SVGs in them!
    </button>,
    <img
        src="https://www.milwaukeemag.com/wp-content/uploads/2021/04/0421-FEAT-BestPizza1-Baran.jpg"
        alt="Pizza"
    />,
];

export const Secondary = Template.bind({});
Secondary.args = {
    items: items2,
    scrollAreaSize: "w-80 h-64",
    titleClassName: "font-serif text-sky-500 font-extrabold",
    titleContent: "Content can be anything!",
    itemClass: "my-2",
};

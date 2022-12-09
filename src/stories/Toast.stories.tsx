import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import cx from "classnames";

import Toast from "../components/Toast";

export default {
    title: "Example/Toast",
    component: Toast,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    triggerClassName:
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
    triggerText: "Click here for toast",
    toastContentClassName: cx(
        "z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg",
        "bg-gray-800",
        "radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right",
        "radix-state-closed:animate-toast-hide",
        "radix-swipe-end:animate-toast-swipe-out",
        "translate-x-radix-toast-swipe-move-x",
        "radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    ),
    toastContent: (
        <div className="flex">
            <div className="w-0 flex-1 flex items-center pl-5 py-4">
                <div className="w-full radix">
                    <h1 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Pull Request Review
                    </h1>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                        Someone requested your review on{" "}
                        <span className="font-medium">repository/branch</span>
                    </p>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col px-3 py-2 space-y-1">
                    <div className="h-0 flex-1 flex">
                        <button
                            className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-purple-600 dark:text-purple-500 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open("https://github.com");
                            }}
                        >
                            Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ),
    dismissBtnClassName:
        "h-0 flex-1 flex w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
    dismissBtnText: "Click here to dismiss",
};

export const Secondary = Template.bind({});
Secondary.args = {
    defaultOpen: true,
    toastContentClassName: cx(
        "z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg",
        "bg-gray-800",
        "radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right",
        "radix-state-closed:animate-toast-hide",
        "radix-swipe-end:animate-toast-swipe-out",
        "translate-x-radix-toast-swipe-move-x",
        "radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    ),
    toastContent: (
        <div className="flex">
            <div className="w-0 flex-1 flex items-center pl-5 py-4">
                <div className="w-full radix">
                    <h1 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Toasts can also open automatically
                    </h1>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                        It will close itself after a specified timeout
                    </p>
                </div>
            </div>
        </div>
    ),
    timeout: 3000,
    dismissBtnClassName:
        "h-0 flex-1 flex w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
    isDismissable: false,
};

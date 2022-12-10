import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";
import cx from "classnames";

export interface Tab {
    title: string;
    value: string;
    content: any | any[];
}

export type TabsProps = {
    items: Tab[];
    tabsListClassName?: string;
    tabsTriggerClassName: string;
    tabsContentClassName: string;
    defaultValue?: string;
};

const Tabs = ({
    items,
    tabsListClassName,
    tabsTriggerClassName,
    tabsContentClassName,
    defaultValue = items[0].value,
}: TabsProps) => {
    return (
        <TabsPrimitive.Root defaultValue={defaultValue}>
            <TabsPrimitive.List
                className={cx("flex w-full", tabsListClassName)}
            >
                {items.map(({ title, value }) => (
                    <TabsPrimitive.Trigger
                        key={`tab-trigger-${value}`}
                        value={value}
                        className={cx("group", tabsTriggerClassName)}
                    >
                        {title}
                    </TabsPrimitive.Trigger>
                ))}
            </TabsPrimitive.List>
            {items.map(({ value, content }) => (
                <TabsPrimitive.Content
                    key={`tab-content-${value}`}
                    value={value}
                    className={cx(tabsContentClassName)}
                >
                    <span>{content}</span>
                </TabsPrimitive.Content>
            ))}
        </TabsPrimitive.Root>
    );
};

export default Tabs;

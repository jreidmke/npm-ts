import React, { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import cx from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./Accordion.scss";

export interface Item {
    triggerContent: string;
    bodyContent: any | any[];
    value: string;
}

export type AccordionProps = {
    accordionType: "multiple" | "single";
    defaultValue: string | string[];
    items: Item[];
    rootClassName: string;
    itemClassName: string;
    triggerClassName: string;
};

const CustomAccordion = ({
    accordionType,
    items,
    defaultValue = items[0].value,
    rootClassName,
    itemClassName,
    triggerClassName,
}: AccordionProps) => (
    <Accordion.Root
        className={rootClassName}
        // @ts-ignore
        defaultValue={
            accordionType === "single" ? defaultValue : [defaultValue]
        }
        type={accordionType}
        collapsible={accordionType === "single"}
    >
        {items.map((i) => (
            <Accordion.Item
                className={`overflow-hidden ${itemClassName}`}
                value={i.value}
            >
                <AccordionTrigger className={triggerClassName}>
                    {i.triggerContent}
                </AccordionTrigger>
                <AccordionContent>{i.bodyContent}</AccordionContent>
            </Accordion.Item>
        ))}
    </Accordion.Root>
);

export type AccordionTriggerProps = {
    children: string;
    className?: string;
};

const AccordionTrigger = ({
    children,
    className,
    ...props
}: AccordionTriggerProps) => (
    <Accordion.Header className="flex">
        <Accordion.Trigger
            className={`AccordionTrigger ${className}`}
            {...props}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
);

export type AccordionContentProps = {
    children: ReactNode;
    className?: string;
};

const AccordionContent = ({
    children,
    className,
    ...props
}: AccordionContentProps) => (
    <Accordion.Content className={cx("AccordionContent", className)} {...props}>
        {children}
    </Accordion.Content>
);

export default CustomAccordion;

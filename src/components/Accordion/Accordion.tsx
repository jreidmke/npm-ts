import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import cx from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./Accordion.scss";

const AccordionDemo = () => (
    <Accordion.Root
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
    >
        <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
                Yes. It's unstyled by default, giving you freedom over the look
                and feel.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <Accordion.Content className="AccordionContent">
                <div className="AccordionContentText">
                    Yes! You can animate the Accordion with CSS or JavaScript.
                </div>
            </Accordion.Content>
        </Accordion.Item>
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
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={cx("AccordionTrigger", className)}
            {...props}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
);

export type AccordionContentProps = {
    children: string;
    className?: string;
};

const AccordionContent = ({
    children,
    className,
    ...props
}: AccordionContentProps) => (
    <Accordion.Content className={cx("AccordionContent", className)} {...props}>
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
);

export default AccordionDemo;

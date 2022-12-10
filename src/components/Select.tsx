import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import cx from "classnames";
import React from "react";

export interface Items {
    title: string;
    value: string;
    disabled: boolean;
}

export type SelectProps = {
    items: Items[];
    selectAriaLable: string;
    triggerClassName: string;
    scrollBtnClassName: string;
    viewportClassName: string;
    itemClassName: string;
    defaultValue: string;
};

const Select = ({
    items,
    selectAriaLable,
    triggerClassName,
    scrollBtnClassName,
    viewportClassName,
    itemClassName,
    defaultValue = items[0].value,
}: SelectProps) => {
    return (
        <SelectPrimitive.Root defaultValue={defaultValue}>
            <SelectPrimitive.Trigger asChild aria-label={selectAriaLable}>
                <button className={triggerClassName}>
                    <SelectPrimitive.Value />
                    <SelectPrimitive.Icon className="ml-2">
                        <ChevronDownIcon />
                    </SelectPrimitive.Icon>
                </button>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Content>
                <SelectPrimitive.ScrollUpButton
                    className={`flex items-center justify-center ${scrollBtnClassName}`}
                >
                    <ChevronUpIcon />
                </SelectPrimitive.ScrollUpButton>
                <SelectPrimitive.Viewport className={viewportClassName}>
                    <SelectPrimitive.Group>
                        {items.map(({ title, value, disabled }) => (
                            <SelectPrimitive.Item
                                disabled={disabled}
                                key={value}
                                value={value}
                                className={itemClassName}
                            >
                                <SelectPrimitive.ItemText>
                                    {title}
                                </SelectPrimitive.ItemText>
                                <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                                    <CheckIcon />
                                </SelectPrimitive.ItemIndicator>
                            </SelectPrimitive.Item>
                        ))}
                    </SelectPrimitive.Group>
                </SelectPrimitive.Viewport>
                <SelectPrimitive.ScrollDownButton
                    className={`flex items-center justify-center ${scrollBtnClassName}`}
                >
                    <ChevronDownIcon />
                </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
        </SelectPrimitive.Root>
    );
};

export default Select;

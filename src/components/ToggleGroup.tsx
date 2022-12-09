import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import cx from "classnames";
import React, { ReactElement } from "react";

export interface ToggleItem {
    value: string;
    label: string;
    icon: ReactElement;
    itemAriaLabel: string;
}

export type ToggleGroupProps = {
    items: ToggleItem[];
    groupAriaLabel: string;
    itemProps: string;
};

const ToggleGroup = ({
    items,
    groupAriaLabel,
    itemProps,
}: ToggleGroupProps) => {
    return (
        <ToggleGroupPrimitive.Root
            type="multiple"
            aria-label={groupAriaLabel}
            defaultValue={[items[0].value]}
        >
            {items.map(({ value, label, icon }, i) => (
                <ToggleGroupPrimitive.Item
                    key={`group-item-${value}-${label}`}
                    value={value}
                    aria-label={label}
                    className={cx("group", itemProps)}
                >
                    {React.cloneElement(icon, {
                        className: "w-5 h-5 text-white",
                    })}
                </ToggleGroupPrimitive.Item>
            ))}
        </ToggleGroupPrimitive.Root>
    );
};

export default ToggleGroup;

import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export type CheckboxProps = {
    checkBoxClassName?: string;
    interiorClassName?: string;
};

const CustomCheckbox = ({
    checkBoxClassName,
    interiorClassName,
}: CheckboxProps) => (
    <form className="flex items-center">
        <Checkbox.Root
            className={`flex h-5 w-5 items-center justify-center rounded ${checkBoxClassName}`}
            defaultChecked
        >
            <Checkbox.Indicator
                className={`h-4 w-4 self-center ${interiorClassName}`}
            >
                <CheckIcon />
            </Checkbox.Indicator>
        </Checkbox.Root>
    </form>
);

export default CustomCheckbox;

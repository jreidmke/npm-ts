import * as SwitchPrimitive from "@radix-ui/react-switch";
import cx from "classnames";
import React from "react";

export type SwitchProps = {
    switchClassName: string;
    thumbClassName: string;
};

const Switch = ({ switchClassName, thumbClassName }: SwitchProps) => {
    return (
        <SwitchPrimitive.Root className={cx("group", switchClassName)}>
            <SwitchPrimitive.Thumb className={cx(thumbClassName)} />
        </SwitchPrimitive.Root>
    );
};

export default Switch;


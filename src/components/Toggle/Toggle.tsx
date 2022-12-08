import React, { useState } from "react";
import * as Toggle from "@radix-ui/react-toggle";
import cx from "classnames";

export type ToggleProps = {
    trigger: any;
    genericClasses: string;
    inactiveClasses: string;
    activeClasses: string;
};

const CustomToggle = ({
    trigger,
    genericClasses,
    activeClasses,
    inactiveClasses,
}: ToggleProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Toggle.Root>
            <div
                className={cx(
                    "flex justify-center items-center",
                    genericClasses,
                    isActive ? activeClasses : inactiveClasses
                )}
                onClick={() => setIsActive(!isActive)}
            >
                {trigger}
            </div>
        </Toggle.Root>
    );
};

export default CustomToggle;

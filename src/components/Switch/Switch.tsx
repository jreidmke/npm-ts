import React from "react";
import * as Switch from "@radix-ui/react-switch";
import "./Switch.scss";

export type SwitchProps = {
    isGradient?: boolean;
};

const CustomSwitch = ({ isGradient }: SwitchProps) => {
    return (
        <Switch.Root
            className={`SwitchRoot border rounded-full mx-6 relative ${
                isGradient
                    ? `bg-gradient-to-r from-cyan-200 to-blue-500`
                    : `bg-black`
            }`}
        >
            <Switch.Thumb
                className={`SwitchThumb block rounded-full ${
                    isGradient ? `bg-blue-400` : `bg-white`
                }`}
            />
        </Switch.Root>
    );
};

export default CustomSwitch;

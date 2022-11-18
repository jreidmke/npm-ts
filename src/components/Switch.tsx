import React from "react";
import * as Switch from "@radix-ui/react-switch";
import "./Switch.css";

const CustomSwitch = () => {
    return (
        <Switch.Root className="SwitchRoot" id="airplane-mode">
            <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
    );
};

export default CustomSwitch;

import * as TogglePrimitive from "@radix-ui/react-toggle";
import React, { useState } from "react";

export type ToggleProps = {
    inactiveContent: any;
    activeContent: any;
    defaultActive: boolean;
};

const Toggle = ({
    inactiveContent,
    activeContent,
    defaultActive,
}: ToggleProps) => {
    const [isActive, setIsActive] = useState(defaultActive);

    return (
        <TogglePrimitive.Root
            defaultPressed={isActive}
            onPressedChange={setIsActive}
            asChild
        >
            {isActive ? activeContent : inactiveContent}
        </TogglePrimitive.Root>
    );
};

export default Toggle;

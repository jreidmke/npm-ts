import { Cross1Icon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import React from "react";

export type PopoverProps = {
    trigger: any;
    contentAlignment?: "start" | "center" | "end" | undefined;
    arrowClassName: string;
    contentClassName: string;
    content: any | any[];
    closeButtonClassName: string;
    closeButtonColor?: string;
};

const Popover = ({
    trigger,
    contentAlignment = "center",
    arrowClassName,
    contentClassName,
    content,
    closeButtonClassName,
    closeButtonColor = "text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400",
}: PopoverProps) => {
    return (
        <div className="relative inline-block text-left">
            <PopoverPrimitive.Root>
                <PopoverPrimitive.Trigger asChild>
                    {trigger}
                </PopoverPrimitive.Trigger>
                <PopoverPrimitive.Content
                    align={contentAlignment}
                    sideOffset={4}
                    className={contentClassName}
                >
                    <PopoverPrimitive.Arrow className={arrowClassName} />
                    {content}
                    <PopoverPrimitive.Close className={closeButtonClassName}>
                        <Cross1Icon className={`h-4 w-4 ${closeButtonColor}`} />
                    </PopoverPrimitive.Close>
                </PopoverPrimitive.Content>
            </PopoverPrimitive.Root>
        </div>
    );
};

export default Popover;

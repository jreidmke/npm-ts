import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

export type TooltipProps = {
    trigger: any;
    tooltipContent: string;
    contentClasses: string;
    arrowClasses: string;
};

const CustomTooltip = ({
    trigger,
    tooltipContent,
    contentClasses,
    arrowClasses,
}: TooltipProps) => {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>{trigger}</Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className={contentClasses}>
                        {tooltipContent}
                        <Tooltip.Arrow className={arrowClasses} />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export default CustomTooltip;

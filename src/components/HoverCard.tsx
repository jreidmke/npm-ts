import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import React from "react";

export type HoverCardProps = {
    trigger: any;
    contentAlignment?: "start" | "center" | "end" | undefined;
    contentClassName: string;
    content: any | any[];
    arrowColor?: string;
};

const HoverCard = ({
    trigger,
    contentAlignment = "center",
    contentClassName,
    content,
    arrowColor,
}: HoverCardProps) => {
    return (
        <HoverCardPrimitive.Root>
            <HoverCardPrimitive.Trigger asChild>
                {trigger}
            </HoverCardPrimitive.Trigger>
            <HoverCardPrimitive.Content
                align={contentAlignment}
                sideOffset={4}
                className={contentClassName}
            >
                <HoverCardPrimitive.Arrow className={`${arrowColor}`} />
                {content}
            </HoverCardPrimitive.Content>
        </HoverCardPrimitive.Root>
    );
};

export default HoverCard;

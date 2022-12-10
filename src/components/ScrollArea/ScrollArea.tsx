import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import "./ScrollArea.scss";

export type ScrollAreaProps = {
    items: any[];
    scrollAreaSize: string;
    titleClassName: string;
    titleContent: string;
    itemClass: string;
};

const ScrollAreaDemo = ({
    items,
    scrollAreaSize,
    titleClassName,
    titleContent,
    itemClass,
}: ScrollAreaProps) => (
    <ScrollArea.Root className={`ScrollAreaRoot ${scrollAreaSize}`}>
        <ScrollArea.Viewport className="ScrollAreaViewport">
            <div style={{ padding: "15px 20px" }}>
                <div className={titleClassName}>{titleContent}</div>
                {items.map((tag) => (
                    <div className={itemClass} key={tag}>
                        {tag}
                    </div>
                ))}
            </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
            className="ScrollAreaScrollbar"
            orientation="vertical"
        >
            <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
            className="ScrollAreaScrollbar"
            orientation="horizontal"
        >
            <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
    </ScrollArea.Root>
);

export default ScrollAreaDemo;

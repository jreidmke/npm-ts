import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import React from "react";

export type CollapsibleProps = {
    triggerClassName: string;
    triggerContent: any;
    content: any | any[];
};

const Collapsible = ({
    triggerClassName,
    triggerContent,
    content,
}: CollapsibleProps) => {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <CollapsiblePrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
            <CollapsiblePrimitive.Trigger className={triggerClassName}>
                {triggerContent}
            </CollapsiblePrimitive.Trigger>
            <CollapsiblePrimitive.Content className="mt-4 flex flex-col space-y-4">
                {content}
            </CollapsiblePrimitive.Content>
        </CollapsiblePrimitive.Root>
    );
};

export default Collapsible;

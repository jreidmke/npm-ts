import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export type DialogProps = {
    trigger: any;
    contentClassName: string;
    content: any | any[];
    optionsClassName: string;
    options?: JSX.IntrinsicElements["button"][] | React.ReactNode[];
};

const CustomDialog = ({
    trigger,
    contentClassName,
    content,
    optionsClassName,
    options,
}: DialogProps) => (
    <Dialog.Root>
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-20 bg-black/50" />
            <Dialog.Content className={contentClassName}>
                <Dialog.Close
                    className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1"
                    asChild
                    aria-label="Close"
                >
                    <Cross2Icon />
                </Dialog.Close>
                {content}
                <div className={optionsClassName}>
                    {options?.length && options.map((o: any) => o)}
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default CustomDialog;

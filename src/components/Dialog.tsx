import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import cx from "classnames";

export type DialogProps = {
    trigger: any;
    contentClassName: string;
    content: any | any[];
    showCancel: boolean;
    optionsClassName: string;
    options?: JSX.IntrinsicElements["button"][] | React.ReactNode[];
};

const CustomDialog = ({
    trigger,
    contentClassName,
    content,
    showCancel = true,
    optionsClassName,
    options,
}: DialogProps) => (
    <Dialog.Root>
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-20 bg-black/50" />
            <Dialog.Content className={contentClassName}>
                {content}
                <div className={optionsClassName}>
                    {options?.length && options.map((o: any) => o)}
                </div>
                {showCancel && (
                    <Dialog.Close asChild>
                        <button
                            className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1"
                            aria-label="Close"
                        >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                )}
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default CustomDialog;

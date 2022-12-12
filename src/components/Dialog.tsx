import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import cx from "classnames";

export type DialogProps = {
    trigger: any;
    dialogTitle?: string;
    dialogDescription?: string;
    dialogContent: any | any[];
    showCancel: boolean;
    options?: JSX.IntrinsicElements["button"][] | React.ReactNode[];
};

const CustomDialog = ({
    trigger,
    dialogTitle,
    dialogDescription,
    dialogContent,
    showCancel = true,
    options,
}: DialogProps) => (
    <Dialog.Root>
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-20 bg-black/50" />
            <Dialog.Content
                className={cx(
                    "fixed z-50",
                    "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
                    "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                    "bg-white dark:bg-gray-800",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
            >
                <Dialog.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {dialogTitle}
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                    {dialogDescription}
                </Dialog.Description>
                {dialogContent}
                <div className="flex justify-end space-x-4">
                    {options?.length && options.map((o: any) => o)}
                </div>
                {showCancel && (
                    <Dialog.Close
                        asChild
                        className={cx(
                            "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1"
                        )}
                    >
                        <button className="IconButton" aria-label="Close">
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                )}
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default CustomDialog;

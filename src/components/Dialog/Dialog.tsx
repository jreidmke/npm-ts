import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./Dialog.scss";

export type DialogProps = {
    trigger: any;
    dialogTitle?: string;
    dialogDescription?: string;
    dialogContent: any | any[];
    showCancel: boolean;
    options?: JSX.IntrinsicElements["button"][];
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
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle">
                    {dialogTitle}
                </Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    {dialogDescription}
                </Dialog.Description>
                {dialogContent}
                <div className="flex justify-end space-x-4">
                    {options?.length &&
                        options.map((o: any) => (
                            <Dialog.Close asChild key={o}>
                                {o}
                            </Dialog.Close>
                        ))}
                </div>
                {showCancel && (
                    <Dialog.Close asChild>
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

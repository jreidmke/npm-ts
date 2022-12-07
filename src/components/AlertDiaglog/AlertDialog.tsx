import * as React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./AlertDialog.scss";

export type AlertDialogProps = {
    trigger: any;
    title: string;
    description: string;
    showCancel?: boolean;
    options?: JSX.IntrinsicElements["button"][];
};

const CustomAlertDialog = ({
    trigger,
    title,
    description,
    showCancel = true,
    options,
}: AlertDialogProps) => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay className="AlertDialogOverlay" />
            <AlertDialog.Content className="AlertDialogContent">
                <AlertDialog.Title className="AlertDialogTitle">
                    {title}
                </AlertDialog.Title>
                <AlertDialog.Description className="AlertDialogDescription">
                    {description}
                </AlertDialog.Description>
                <div className="flex justify-end space-x-4 mt-4">
                    {showCancel && (
                        <AlertDialog.Cancel asChild>
                            <button className="Button mauve">Cancel</button>
                        </AlertDialog.Cancel>
                    )}

                    {options?.length &&
                        options.map((o: any) => (
                            <AlertDialog.Action asChild>{o}</AlertDialog.Action>
                        ))}
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
);

export default CustomAlertDialog;

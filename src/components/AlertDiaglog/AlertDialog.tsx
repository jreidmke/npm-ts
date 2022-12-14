import * as React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export type AlertDialogProps = {
    trigger: any;
    contentClassName: string;
    content: any | any[];
    optionsClassName: string;
    options?: JSX.IntrinsicElements["button"][] | React.ReactNode[];
};

const CustomAlertDialog = ({
    trigger,
    contentClassName,
    content,
    optionsClassName,
    options,
}: AlertDialogProps) => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay className="fixed inset-0 z-20 bg-black/50" />
            <AlertDialog.Content className={contentClassName}>
                <AlertDialog.Cancel asChild>
                    <button className="bg-gray-200 px-4 py-2 rounded">
                        Cancel
                    </button>
                </AlertDialog.Cancel>
                {content}
                <div className={optionsClassName}>
                    {options?.length && options.map((o: any) => o)}
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
);

export default CustomAlertDialog;

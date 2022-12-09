import * as ToastPrimitive from "@radix-ui/react-toast";
import React from "react";

export type ToastProps = {
    //auto open props
    defaultOpen: boolean;
    timeout: number;

    //trigger props
    triggerClassName: string;
    triggerText?: string;

    //toast props
    toastContentClassName: string;
    toastContent: any | any[];

    //dismiss button props
    dismissBtnClassName: string;
    dismissBtnText: string;
    isDismissable: boolean;
};

const CustomToast = ({
    defaultOpen = false,
    timeout = 4000,
    triggerClassName,
    triggerText,
    toastContentClassName,
    toastContent,
    dismissBtnClassName,
    dismissBtnText = "Dismiss",
    isDismissable = true,
}: ToastProps) => {
    const [open, setOpen] = React.useState(defaultOpen || false);
    if (defaultOpen) {
        setTimeout(() => setOpen(false), timeout);
    }

    return (
        <ToastPrimitive.Provider>
            {!defaultOpen && (
                <button
                    onClick={() => setOpen(!open)}
                    className={triggerClassName}
                >
                    {triggerText}
                </button>
            )}
            <ToastPrimitive.Root
                open={open}
                onOpenChange={setOpen}
                className={toastContentClassName}
            >
                {toastContent}
                {isDismissable && (
                    <ToastPrimitive.Close className={dismissBtnClassName}>
                        {dismissBtnText}
                    </ToastPrimitive.Close>
                )}
            </ToastPrimitive.Root>
            <ToastPrimitive.Viewport />
        </ToastPrimitive.Provider>
    );
};

export default CustomToast;

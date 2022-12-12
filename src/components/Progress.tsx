import * as ProgressPrimitive from "@radix-ui/react-progress";
import React, { useEffect } from "react";

export type ProgessProps = {
    initProgress: number;
    progressRootClassName: string;
    progressIndicatorClassName: string;
};

const Progress = ({
    initProgress = 0,
    progressRootClassName,
    progressIndicatorClassName,
}: ProgessProps) => {
    const [progress, setProgress] = React.useState(initProgress);

    useEffect(() => {
        let timerId: null | NodeJS.Timer = null;

        timerId = setInterval(() => {
            const p = 20;
            setProgress(p);
        }, 1000);

        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, []);

    return (
        <ProgressPrimitive.Root
            value={progress}
            className={progressRootClassName}
        >
            <ProgressPrimitive.Indicator
                style={{ width: `${progress}%` }}
                className={progressIndicatorClassName}
            />
        </ProgressPrimitive.Root>
    );
};

export default Progress;

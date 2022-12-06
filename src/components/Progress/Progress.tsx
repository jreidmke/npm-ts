import React from "react";
import * as Progress from "@radix-ui/react-progress";
import "./Progess.scss";

const CustomProgress = () => {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Progress.Root className="ProgressRoot" value={66}>
            <Progress.Indicator
                className="ProgressIndicator"
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    );
};

export default CustomProgress;

import * as SliderPrimitive from "@radix-ui/react-slider";
import cx from "classnames";
import React from "react";

export type SliderProps = {
    defaultValue: number[] | undefined;
    max: number;
    step: number;
    uxWidth?: string; //pass in as tailwind w-*
    trackColor?: string;
    thumbColor?: string;
    thumbOutlineColor?: string;
    additionalTrackProps?: string;
    additionalThumbProps?: string;
};

const Slider = ({
    defaultValue,
    max,
    step,
    uxWidth = "w-64",
    trackColor = "bg-black",
    thumbColor = "bg-black",
    additionalTrackProps,
    additionalThumbProps,
}: SliderProps) => {
    return (
        <SliderPrimitive.Root
            defaultValue={defaultValue}
            max={max}
            step={step}
            aria-label="value"
            className={`relative flex h-5 touch-none items-center ${uxWidth}`}
        >
            <SliderPrimitive.Track
                className={`relative h-1 w-full grow rounded-full ${trackColor} ${additionalTrackProps}`}
            >
                <SliderPrimitive.Range
                    className={`absolute h-full rounded-full bg-black ${trackColor} ${additionalTrackProps}`}
                />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb
                className={cx(
                    `block h-5 w-5 rounded-full ${thumbColor}`,
                    additionalThumbProps
                )}
            />
        </SliderPrimitive.Root>
    );
};

export default Slider;

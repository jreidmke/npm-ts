import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export interface RadioItem {
    id: string;
    title: string;
}

export type RadioGroupProps = {
    items: RadioItem[];
    ariaLabel: string;
    labelClassName: string;
    labelContent: string;
    buttonClassName: string;
    itemClassName: string;
    defaultValue?: string;
};

const RadioGroup = ({
    items,
    ariaLabel,
    labelClassName,
    labelContent,
    buttonClassName,
    itemClassName,
    defaultValue = items[0].title,
}: RadioGroupProps) => {
    const [value, setValue] = React.useState(defaultValue);

    return (
        <form>
            <legend className={labelClassName}>{labelContent}</legend>
            <RadioGroupPrimitive.Root
                aria-label={ariaLabel}
                defaultValue={defaultValue}
                onValueChange={setValue}
            >
                <div className="mt-3 space-y-3">
                    {items.map((pokemon) => (
                        <div key={pokemon.id} className="flex items-center">
                            <RadioGroupPrimitive.Item
                                id={pokemon.id}
                                value={pokemon.title}
                                className={buttonClassName}
                            >
                                <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center leading-0">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                </RadioGroupPrimitive.Indicator>
                            </RadioGroupPrimitive.Item>
                            <label
                                htmlFor={pokemon.id}
                                className={itemClassName}
                            >
                                {pokemon.title}
                            </label>
                        </div>
                    ))}
                </div>
            </RadioGroupPrimitive.Root>
        </form>
    );
};

export default RadioGroup;

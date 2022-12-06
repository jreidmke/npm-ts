import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./Checkbox.scss";

export type CheckboxProps = {
    label?: string;
};

const CustomCheckbox = ({ label = "Checkbox Label" }: CheckboxProps) => (
    <form>
        <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
                <Checkbox.Indicator className="CheckboxIndicator">
                    <CheckIcon />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <p className="ml-2">{label}</p>
        </div>
    </form>
);

export default CustomCheckbox;

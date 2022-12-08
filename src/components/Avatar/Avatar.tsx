import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import "./Avatar.scss";

export type AvatarProps = {
    imageSrc: string;
};

// trouble w/ image

const CustomAvatar = ({ imageSrc }: AvatarProps) => (
    <Avatar.Root className="AvatarRoot">
        <Avatar.Image className="AvatarImage" src={imageSrc} alt="Colm Tuite" />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            CT
        </Avatar.Fallback>
    </Avatar.Root>
);

export default CustomAvatar;

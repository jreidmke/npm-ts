import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

export type AvatarProps = {
    imageSrc: string;
};

const CustomAvatar = ({ imageSrc }: AvatarProps) => (
    <Avatar.Root className="relative inline-flex h-10 w-10">
        <Avatar.Image
            className="h-full w-full object-cover rounded-full"
            src={imageSrc}
            alt="Colm Tuite"
        />
        <Avatar.Fallback
            className="flex h-full w-full items-center justify-center bg-white dark:bg-gray-800 rounded-full"
            delayMs={600}
        >
            CT
        </Avatar.Fallback>
    </Avatar.Root>
);

export default CustomAvatar;

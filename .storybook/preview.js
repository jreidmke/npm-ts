import "../src/index.css";
import { themes } from "@storybook/theming";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    darkMode: {
        current: "light",
        dark: { ...themes.dark, appBg: "black" },
        light: { ...themes.normal, appBg: "white" },
        darkClass: "lights-out",
        lightClass: "lights-on",
        classTarget: "html",
    },
};

import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

// const fonts={mono: `Menlo', monospace`}

// const breakpoints=createBreakpoints({
//     sm:'40em',
//     md:'52em',
//     lg:'64em',
//     xl:'80em',
// })

//#e6f5ff = brandSoft
const colors = {
    brand: {
        100: "#68c1fd",
        200: "#4fb7fd",
        300: "#35adfd",
        400: "#1ca2fc",
        500: "#0398fc",
        600: "#0389e3",
        700: "#027aca",
        800: "#026ab0",
        900: "#025b97",
    },
    brandSoft: {
        100: "#68c1fd",
        200: "#4fb7fd",
        300: "#35adfd",
        400: "#1ca2fc",
        500: "#e6f5ff",
        600: "none", // hover
        700: "#4fb7fd",
        800: "#35adfd",
        900: "#1ca2fc",
    },
    vanilla: {
        100: "#948f8a",
        200: "#aca7a1",
        300: "#c5bfb8",
        400: "#ddd7cf",
        500: "#f6efe6",
        600: "#f7f1e9",
        700: "#f8f2eb",
        800: "#f9f4ee",
        900: "#faf5f0",
    }
};

const theme = extendTheme({ config, colors, });

export default theme;
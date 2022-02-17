import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        blue:{
            200: "hsl(215, 51%, 70%)",
            600: "hsl(216, 50%, 16%)",
            700: "hsl(217, 54%, 11%)",
            750: "hsl(216, 53%, 15%)",
            800: "hsl(215, 32%, 27%)",
            900: "hsl(215, 32%, 16%)"
        },
        cyan: {
            300: "hsl(178, 100%, 50%)"
        },
        white: {
            200: "hsl(0, 0%, 100%)"
        }
    },
    fonts: {
        heading: "Poppins",
        body: "Poppins",
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
})
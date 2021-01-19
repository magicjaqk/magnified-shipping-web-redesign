import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  fontWeights: {
    light: 300,
    medium: 400,
    bold: 500,
  },
  colors: {
    primary: "#0070CF",
    secondary: "#FEC034",
    light: "#F2F2F2",
    dark: "#28262C",
    danger: "#7A0200",
  },
  fontSizes: {
    imgText: "72px",
    bodyHeader: "48px",
  },
  fonts: {
    imgText: "IBM Plex Sans",
    body: "IBM Plex Sans",
    nav: "IBM Plex Sans",
  },
});

export default CustomTheme;

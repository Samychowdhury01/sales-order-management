import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const themeConfig = extendTheme({ config });

export default themeConfig;

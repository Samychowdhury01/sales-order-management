import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header style={{display: "flex", justifyContent: "flex-end", alignItems: "end"}}>
      <Button onClick={toggleColorMode} m={"10px"}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </header>
  );
};

export default ThemeToggle;

/* eslint-disable react/prop-types */
import { Button, useColorMode } from "@chakra-ui/react";

const ThemedButton = ({ children, isSubmitting }) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      mt={4}
      bg={colorMode === "light" ? "black" : "white"}
      color={colorMode === "light" ? "white" : "black"}
      _hover={{
        bg: colorMode === "light" ? "gray.600" : "gray.200",
        color: colorMode === "light" ? "white" : "black",
        transition: "all 0.4s ease-in-out",
      }}
      isLoading={isSubmitting}
      type="submit"
    >
      {children}
    </Button>
  );
};

export default ThemedButton;

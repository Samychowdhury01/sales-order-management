import { Box } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import ThemeToggle from "../components/ThemeToggle";

const Login = () => {
  return (
    <>
    <ThemeToggle/>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        my={"auto"}
      >
        <LoginForm/>
      </Box>
    </>
  );
};

export default Login;

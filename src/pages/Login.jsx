import { Box, Image } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import ThemeToggle from "../components/ThemeToggle";
import loginImg from "../assets/login.png"

const Login = () => {
  return (
    <>
    <ThemeToggle/>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }} // Responsive flex direction
        alignItems="center"
        justifyContent="center"
        height={{ base: "auto", md: "100vh" }} // Responsive height
        my="auto"
        p={"10px"}
      >
         <Image
    boxSize='500px'
    width={{base : "100%", md: "40%"}}
    objectFit='cover'
    src={loginImg}
    alt='Dan Abramov'
  />
        <LoginForm/>
      </Box>
    </>
  );
};

export default Login;

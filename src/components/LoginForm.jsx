import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Text,
  Container,
  Heading,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import ThemedButton from "./ThemedButton";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const LoginForm = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
    //  const user =  localStorage.getItem("user");
    // validating the user
     if (data.username === 'admin' && data.password === 'Sales100@'){
      localStorage.setItem('user', true)
      Swal.fire({
        title: "Login Successful",
        text: "redirect to the admin dashboard",
        icon: "success"
      });
      navigate('/admin')
     }
     else{
      Swal.fire({
        title: "Invalid credentials",
        text: "Please provide valid username and password",
        icon: "error"
      });
     }
     
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container border={"2px"} p={"20px"} rounded={"2xl"} boxShadow={'custom'}>
      <Heading textAlign={"center"} mb={"5px"}>Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <FormControl isInvalid={errors.username}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            placeholder="Username"
            {...register("username", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormControl>
        {/* Password */}
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "This is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                message:
                  "Password must have one Uppercase, one lowercase, one number, and one special character",
              },
            })}
          />
          <FormErrorMessage>
            {errors.password && (
              <Text color="red.500">{errors.password.message}</Text>
            )}
          </FormErrorMessage>
        </FormControl>

        <ThemedButton isSubmitting={isSubmitting}>Login</ThemedButton>
      </form>
    </Container>
  );
};

export default LoginForm;

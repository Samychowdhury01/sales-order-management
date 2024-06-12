import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Text,
  Container,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import ThemedButton from "./ThemedButton";
const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container border={"2px"} p={"20px"} rounded={"10px"}>
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
            placeholder="Password"
            {...register("password", {
              required: "This is required",
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
          />
          <FormErrorMessage>
            {errors.password?.type === "required" && (
              <Text color="red.500">Password is required</Text>
            )}
            {errors.password?.type === "minLength" && (
              <Text color="red.500">Password must be 6 characters</Text>
            )}
            {errors.password?.type === "maxLength" && (
              <Text color="red.500">
                Password must be less than 20 characters
              </Text>
            )}
            {errors.password?.type === "pattern" && (
              <Text color="red.500">
                Password must have one Uppercase <br /> one lower case, one
                number and one special character.
              </Text>
            )}
          </FormErrorMessage>
        </FormControl>
        <ThemedButton isSubmitting={isSubmitting}>Login</ThemedButton>
      </form>
    </Container>
  );
};

export default LoginForm;

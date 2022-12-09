import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtoms";

type Props = {};

const Login = (props: Props) => {
  // Recoil state for if they dont have an account and want to sign up instead. Will change the modal state to signup instead of login
  const setAuthModalState = useSetRecoilState(authModalState);
  // form to submit to firebase
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // function to handle the user input, ie when they type something in the input fields
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Needs to update the form state with current value of what user inputted
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // function to handle the submit of the form
  const handleSubmit = () => {};
  return (
    <form onClick={handleSubmit}>
      <Input
        onChange={handleChange}
        name="email"
        placeholder="Enter your email"
        type="email"
        mb={2}
        _hover={{
          bg: "#f2f2f2",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "#f2f2f2",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Input
        onChange={handleChange}
        name="pw"
        placeholder="Enter your Password"
        type="password"
        mb={2}
        _hover={{
          bg: "#f2f2f2",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "#f2f2f2",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Button width="100%" height="2rem" my={3} type="submit">
        Login
      </Button>
      {/* Sign up prompt if they dont have an account  */}
      <Flex fontSize="9pt" justify="center" color="black">
        <Text mr={1}>New Here?</Text>
        <Text
          color="blue.500"
          fontWeight="700"
          cursor="pointer"
          textTransform="uppercase"
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "signup" }))
          }
        >
          Sign Up!
        </Text>
      </Flex>
    </form>
  );
};

export default Login;

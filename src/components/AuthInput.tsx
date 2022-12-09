import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { authModalState } from "../atoms/authModalAtoms";
import Login from "./Login";
import SignUp from "./SignUp";

type Props = {};

const AuthInput = (props: Props) => {
  // Get the global modal state from recoil
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      width="100%"
      mt={2}
      mb={4}
    >
      {/* Control which input you see based on which modal was selected. must tap into the global state of Modal  */}
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && <SignUp />}
    </Flex>
  );
};

export default AuthInput;

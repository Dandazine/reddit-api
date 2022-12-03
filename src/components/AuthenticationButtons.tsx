import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtoms";
import AuthModal from "./AuthModal";

type Props = {};

const AuthenticationButtons = (props: Props) => {
  // Setting the recoil modal state
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <AuthModal />
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "4.375rem", md: "6.87rem" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Login
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "4.375rem", md: "6.87rem" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthenticationButtons;

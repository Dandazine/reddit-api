import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtoms";
import AuthInput from "./AuthInput";
import OAuthBtn from "./OAuthBtn";

type Props = {};

const AuthModal: React.FC = (props: Props) => {
  // state set from recoil
  const [modalState, setModalState] = useRecoilState(authModalState);
  // handling the closing modal
  const handleModalClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  return (
    //   Grabbed from ChakraUI docs
    <>
      <Modal isOpen={modalState.open} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" color="#000">
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset your Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {/* OAuth Buttons for sign in and login  */}
            <Flex
              direction="column"
              justify="center"
              align="center"
              width="75%"
            >
              <OAuthBtn />
              <Text color="gray.500" fontWeight={700}>
                OR
              </Text>
              <AuthInput />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtoms";

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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Testing 123</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;

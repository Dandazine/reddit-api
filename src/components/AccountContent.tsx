import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthenticationButtons from "./AuthenticationButtons";

type Props = {};

const AccountContent = (props: Props) => {
  return (
    <>
      <Flex justify="center" align="center">
        <AuthenticationButtons />
      </Flex>
    </>
  );
};

export default AccountContent;

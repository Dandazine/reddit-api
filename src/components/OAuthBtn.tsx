import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

type Props = {};

const OAuthBtn = (props: Props) => {
  return (
    <Flex direction="column" width="100%" mb={1} color="black">
      <Button variant="oauth" mb={2}>
        <Image src="/assets/logo-google.png" height="1rem" mr={3} />
        Continue with Google
      </Button>
      <Button variant="oauth">Continue with Reddit</Button>
    </Flex>
  );
};

export default OAuthBtn;

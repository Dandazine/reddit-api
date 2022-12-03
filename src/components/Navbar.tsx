import { Flex, Image } from "@chakra-ui/react";
import AccountContent from "./AccountContent";
import Search from "./Search";

const Navbar = () => {
  return (
    <Flex bg="#292b2f" height="3rem" padding=".5rem .75rem">
      <Flex align="center">
        <Image src="/assets/logo-reddit-mobile.svg" height="30px" />
        {/* Disappears on mobile view  */}
        <Image
          src="/assets/text-reddit.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <Search />
      <AccountContent />
    </Flex>
  );
};

export default Navbar;

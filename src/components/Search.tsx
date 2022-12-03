import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

type SearchProps = {};

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  return (
    <Flex flexGrow={1} mr={2} align="center">
      {/* Input Field taken from Chakra UI Docs  */}
      <InputGroup bg="#34353e">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" mb={1} />}
        />
        <Input
          type="input"
          placeholder="Search Reddit"
          height="2.1rem"
          _hover={{
            border: "1px solid",
            borderColor: "blue.200",
            cursor: "pointer",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
        />
      </InputGroup>
    </Flex>
  );
};

export default Search;

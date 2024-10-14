import { Flex, Image, Button, Box, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function HeaderComp() {
  return (
    <>
      <Box bg="gray.100" p={4}>
        <Flex justify="space-between" alignItems="center">
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            borderRadius="50%"
            width="70px"
          />
          <Button
            colorScheme="gray.100"
            variant="outline"
            borderRadius="30px"
            _hover={{ bg: "gray.300" }}
          >
            <HamburgerIcon />
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              borderRadius="50%"
              width="30px"
              marginLeft="10px"
            />
          </Button>
        </Flex>
        <Text textAlign="center" fontSize="5xl">
          Dove Vuoi Andare?
        </Text>
      </Box>
    </>
  );
}

export default HeaderComp;

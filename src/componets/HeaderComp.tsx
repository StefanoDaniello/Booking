import {
  Flex,
  Image,
  Button,
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { useContextApp } from "../store/context";
function HeaderComp() {
  const { filterList } = useContextApp();
  return (
    <>
      <Container maxW="1400px" p={4}>
        <Box p={4}>
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
              _hover={{ bg: "gray.300", cursor: "pointer" }}
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
          <Box textAlign="center">
            <Text fontSize="5xl">Dove Vuoi Andare?</Text>
            <Box display="flex" justifyContent="center" alignItems="center">
              {filterList.map((item, index) => (
                <Box
                  key={index}
                  _hover={{
                    borderBottom: "2px solid black",
                    cursor: "pointer",
                  }}
                  borderBottom="2px solid transparent"
                  display="flex"
                  alignItems="center"
                  alignContent="space-around"
                  mx={3}
                  mt={5}
                >
                  <Text>{item.icon}</Text>
                  <Text ml={2}>{item.name}</Text>
                </Box>
              ))}
            </Box>
            <Box display="flex" justifyContent="center">
              <Container
                maxW="1000px"
                p={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box width="100%" mt={10}>
                  <InputGroup width="100%" display="flex" alignItems="center">
                    <InputLeftElement
                      pointerEvents="none"
                      display="flex"
                      alignItems="center"
                      mt={2}
                    >
                      <SearchIcon ml={3} />
                    </InputLeftElement>
                    <Input
                      type="tel"
                      placeholder="Luoghi da visitare, cose da fare, hotel..."
                      border="1px solid black"
                      borderRadius="50px"
                      boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
                      height="60px"
                      _focus={{
                        borderColor: "teal.500",
                      }}
                    />
                    <InputRightElement
                      mr={7}
                      display="flex"
                      alignItems="center"
                    >
                      <Button
                        colorScheme="green"
                        variant="solid"
                        borderRadius="50px"
                        px={10}
                        height="full"
                        mt={5}
                      >
                        Ricerca
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Container>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default HeaderComp;

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function FooterBottom() {
  return (
    <Box bg="gray.800" color="white" py={10}>
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between"
        direction={["column", "row"]}
        px={[4, 8, 12]}
      >
        {/* Section 1: Brand */}
        <Box mb={[6, 0]}>
          <Heading fontSize="xl" mb={4}>
            Travel
          </Heading>
          <Text fontSize="sm">
            Explore the world with us. Discover beautiful destinations and
            unique experiences.
          </Text>
        </Box>

        {/* Section 2: Links */}
        <Stack spacing={3} mb={[6, 0]}>
          <Heading fontSize="md" mb={2}>
            Links
          </Heading>
          <Link href="#" color="gray.300" _hover={{ color: "white" }}>
            About Us
          </Link>
          <Link href="#" color="gray.300" _hover={{ color: "white" }}>
            Contact
          </Link>
          <Link href="#" color="gray.300" _hover={{ color: "white" }}>
            Blog
          </Link>
        </Stack>

        {/* Section 3: Social Media */}
        <Stack spacing={3} align="flex-start">
          <Heading fontSize="md" mb={2}>
            Follow Us
          </Heading>
          <Flex>
            <IconButton
              as="a"
              href="#"
              icon={<FaFacebook />}
              aria-label="Facebook"
              bg="transparent"
              color="gray.300"
              _hover={{ color: "white" }}
              mr={2}
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaTwitter />}
              aria-label="Twitter"
              bg="transparent"
              color="gray.300"
              _hover={{ color: "white" }}
              mr={2}
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaInstagram />}
              aria-label="Instagram"
              bg="transparent"
              color="gray.300"
              _hover={{ color: "white" }}
            />
          </Flex>
        </Stack>
      </Flex>

      {/* Copyright Section */}
      <Text textAlign="center" mt={8} fontSize="sm" color="gray.500">
        © 2024 Travel. All rights reserved.
      </Text>
    </Box>
  );
}

export default FooterBottom;

import { Container, Box } from "@chakra-ui/react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

function FooterComp() {
  return (
    <>
      <Box bg="gray.800" color="white">
        <Container maxW="1400px" py={8}>
          <FooterTop></FooterTop>
        </Container>
        <FooterBottom></FooterBottom>
      </Box>
    </>
  );
}

export default FooterComp;

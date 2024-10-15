import { Container, Box } from "@chakra-ui/react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

function FooterComp() {
  return (
    <>
      <Box bg="gray.200">
        <Container maxW="1400px" py={8}>
          <FooterTop></FooterTop>
        </Container>
      </Box>
      <FooterBottom></FooterBottom>
    </>
  );
}

export default FooterComp;
